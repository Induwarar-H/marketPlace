/**
 * Created by WebStorm.
 * User: athukorala
 * Date: 7/20/20
 * Time: 2:58 PM
 */
/* eslint-disable*/

import * as constants from "../const/constants";
import Cookies from "js-cookie";
import toastr from 'toastr';
import swal from "sweetalert";
import {lang, language} from "../const/language";
import * as courseService from '../services/course'
import Router from "next/router";


export const removeCookiesValues = async () => {
    await Cookies.remove(constants.ACCESS_TOKEN);
    await Cookies.remove(constants.REFRESH_TOKEN);
    await Cookies.remove(constants.VERIFY_CODE);
};


export const notifyMessage = (msg, type, duration) => {
    console.log(msg)
    let msgType = "warning";

    if (type === 2) {
        msgType = "warning"
    } else if (type === 0) {
        msgType = "error"
    } else if (type === 1) {
        msgType = "success"
    }
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "2500",
        "hideDuration": "2500",
        "timeOut": duration === undefined ? "5500" : duration,
        "extendedTimeOut": "2500",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    toastr[msgType](msg === undefined || msg === null ? "Please enter correct details" : msg, type === 0 ? 'Error' : type === 1 ? 'Success' : 'Warning')
};

export function readFile(file) {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.addEventListener("load", () => resolve(reader.result), false);
        reader.readAsDataURL(file);
    });
}

export const submitHandler = async (obj) => {
    console.log(obj);
    let user = JSON.parse(localStorage.getItem("User"))
    console.log('user', user)
    let data = {
        "courseId": obj.courseId,
        "studentId": user.id,
        "promoId": obj.promoCodeId === "" ? 0 : obj.promoCodeId
    };
    console.log(data);
    courseService.initCardPayment(data).then(res => {
        console.log(res.body)

        Router.push(res.body.payUrl)
    })
};


