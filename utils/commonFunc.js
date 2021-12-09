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