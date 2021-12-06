import ApiService from "./apiService";


// Student password reset
export async function studentPasswordUpdate(data) {
    const apiObject = {};
    apiObject.method = 'PUT';
    apiObject.authentication = false;
    apiObject.endpoint = `student/password`;
    apiObject.body = data;
    return await ApiService.callApi(apiObject);
}

//update Student
export async function studentUpdate(data) {
    const apiObject = {};
    apiObject.method = 'POST';
    apiObject.authentication = false;
    apiObject.endpoint = `student`;
    apiObject.body = data;
    return await ApiService.callApi(apiObject);
}


//Get student profile
export async function getStudentProfile(data) {
    const apiObject = {};
    apiObject.method = 'GET';
    apiObject.authentication = true;
    apiObject.endpoint = 'student';
    apiObject.body = null;
    return await ApiService.callApi(apiObject);
}


//Get OTP for an existing number by student
export async function getOtpForExistingNumber(mobile) {
    const apiObject = {};
    apiObject.method = 'PATCH';
    apiObject.authentication = false;
    apiObject.endpoint = `student/public/otp/existing/${mobile}`;
    apiObject.body = {};
    return await ApiService.callApi(apiObject);
}
