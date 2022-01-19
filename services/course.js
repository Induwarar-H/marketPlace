import ApiService from './apiService';

export async function loadAllCourses(token) {
    const apiObject = {};
    apiObject.method = 'GET';
    apiObject.authentication = false;
    apiObject.endpoint = 'student/public/course/home';
    apiObject.body = null;
    return await ApiService.callApi(apiObject);
}

export async function getCourseDetailsById(id) {
    const apiObject = {};
    apiObject.method = 'GET';
    apiObject.authentication = false;
    apiObject.endpoint = 'student/public/course/' + id;
    apiObject.body = null;
    return await ApiService.callApi(apiObject);
}

export async function checkPromoCode(id) {
    const apiObject = {};
    apiObject.method = 'GET';
    apiObject.endpoint = 'student/course/promo-code/' + id;
    apiObject.authentication = true;
    apiObject.body = null;
    return await ApiService.callApi(apiObject);
}

export async function initCardPayment(data) {
    const apiObject = {};
    apiObject.method = 'POST';
    apiObject.authentication = true;
    apiObject.endpoint = `student/course/payment/card`;
    apiObject.body = data;
    return await ApiService.callApi(apiObject);
}