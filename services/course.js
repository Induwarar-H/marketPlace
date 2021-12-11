import ApiService from './apiService';

export async function loadAllCourses(token) {
    const apiObject = {};
    apiObject.method = 'GET';
    apiObject.authentication = false;
    apiObject.endpoint = 'student/public/course/home';
    apiObject.body = null;
    return await ApiService.callApi(apiObject);
}