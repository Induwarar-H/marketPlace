import axios from 'axios';
import apiConfig from './apiConfig';
import Cookies from "js-cookie";
import * as constants from "../const/constants";
import * as authService from "./auth";
import qs from "qs";
import swal from "sweetalert";
import * as commonFunc from "../utils/commonFunc";
import {lang, language} from "../const/language";

export const callApi = async(apiObject) => {
    let body = {};
    let headers;
    let method = apiObject.method ? apiObject.method.toLowerCase() : 'get';

    if (method === 'post' || method === 'put' || method === 'patch') {
        body = apiObject.body ? apiObject.body : {};
    }

    headers = {
        'Content-Type': apiObject.urlencoded ? 'application/x-www-form-urlencoded' : apiObject.multipart ? 'multipart/form-data' : 'application/json',
    };
    if (apiObject.authentication) {
        let access_token = Cookies.get(constants.ACCESS_TOKEN);
        if (access_token) {
            headers.Authorization = `Bearer ${access_token}`;
        }
    }
    if (apiObject.isBasicAuth) {
        headers.Authorization = `Basic ${constants.BASIC_AUTH}`;
    }

    headers.VerfiyCode = Cookies.get(constants.VERIFY_CODE);

    const url = `${apiConfig.serverUrl}/${apiConfig.basePath}/${apiObject.endpoint}`;
    let result;

    await axios[method](url, method !== 'get' ? body : {headers: headers}, {headers: headers})
        .then(async response => {
            if(!response.data.success){
                let code = response.data.code;
                if(code === 470 || code === 471){
                    // commonFunc.notifyMessage(response.message, 0);
                    await commonFunc.removeCookiesValues();
                    window.location = `${constants.BASE_ROUTE}${constants.AUTH_LOGIN_ROUTE}`;
                }
            }
            result = await {...response.data,status: response.data.success ? 1 : 0 };
        })
        .catch(async error => {

            if(apiObject.note === constants.VERIFY_USER_NOTE){
                await commonFunc.removeCookiesValues();
                window.location = `${constants.BASE_ROUTE}${constants.AUTH_LOGIN_ROUTE}`;
            }

            if (error !== undefined) {
                if (error.response === undefined) {
                    result = await {
                        success: false,
                        status: 2,
                        message: "Your connection was interrupted",
                        data: null,
                    }
                } else if (error.response.status === 401) {

                    if (apiObject.state === "renewToken") {
                        result = await {success: false, status: 2, message: constants.EXPIRED_TEXT};
                        return;
                    }
                    if (apiObject.state === "login") {
                        result = await {success: false, status: 0, message: error.response.data.message};
                        return;
                    }
                    result = await renewTokenHandler(apiObject);

                } else if (error.response.status === 403) {
                    result = await {
                        success: false,
                        status: 2,
                        message: "Access is denied.",
                        data: null,
                    };
                } else if (error.response.status === 417) {
                    result = await {
                        success: false,
                        status: 2,
                        message: "Oops! Something went wrong.",
                        data: null,
                    };
                } else if (error.response.data !== undefined) {
                    result = await {
                        success: false,
                        status: 0,
                        message: error.response.data.message,
                        data: null,
                    }
                } else {
                    result = await {
                        success: false,
                        status: 2,
                        message: "Sorry, something went wrong.",
                        data: null,
                    };
                }
            } else {
                result = await {
                    success: false,
                    status: 2,
                    message: "Your connection was interrupted!",
                    data: null,
                };
            }
        });

    return result;
};
export const renewTokenHandler = async (apiObject) => {
    let result;
    // renew token - start
    const obj = {refresh_token: Cookies.get(constants.REFRESH_TOKEN), grant_type: 'refresh_token'};
    await authService.renewToken(qs.stringify(obj))
        .then(async response => {
            if (response.access_token) {
                Cookies.set(constants.ACCESS_TOKEN, response.access_token);
                Cookies.set(constants.REFRESH_TOKEN, response.refresh_token);
                result = await callApi(apiObject);
            } else {
                result = await response;
                swal({title: response.message, icon: null,closeOnClickOutside: false, buttons: {dangerMode: {text: language[lang].OkayText, value: "action", className: "okay-btn"}}})
                    .then((value) => {
                        switch (value) {
                            case "action":
                                commonFunc.removeCookiesValues();
                                window.location = `${constants.BASE_ROUTE}${constants.AUTH_LOGIN_ROUTE}`;
                                break;
                            default:
                                break;
                        }
                    });
            }
        });
    // renew token - end
    return result;
};

export default {renewTokenHandler,callApi};
