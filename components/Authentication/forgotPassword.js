import React from 'react'
import {lang, language} from "../../const/language";
import * as authService from '../../services/auth'
import * as commonFunc from "@/utils/commonFunc";

const INITIAL_DETAILS = {
    contact: '',
    otpCode: ''
};


const forgetPassword = () => {
    const [username, setUsername] = React.useState('');
    const [otpCode, setOtpCode] = React.useState('');
    const [step, setStep] = React.useState('GETOTP');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUsername(prevState => ({...prevState, [name]: value}));
    };

    const getOtpCode = () => {
        let contact = username.username;
        authService.forgetPasswordOtp(contact).then(res => {
            if (res.success) {
                setStep('SETOTP')
            } else {
                commonFunc.notifyMessage(res.message, 0)
            }
        })
    };

    const verifyOTP = () => {
        console.log(otpCode)
    };

    return (
        <div className="login-form">
            <h2 style={{textAlign: 'center'}}>Reset Password</h2>
            {step === 'GETOTP' ?
                <div>
                    <div className="form-group">
                        <label>Email/Mobile number</label>
                        <input
                            className="form-control"
                            placeholder="Email / MobileNumber"
                            name="username"
                            type="username"
                            value={username.username}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" onClick={() => getOtpCode()}>
                        {language[lang].getYourOTP}
                        {/*{loading ? <Spinner color="success"/> : ''}*/}
                    </button>
                </div> :
                step === 'SETOTP' ?
                    <div>
                        <div className="form-group">
                            <label>Your OTP</label>
                            <input
                                className="form-control"
                                placeholder="Your OTP Code"
                                name="otpCode"
                                type="otp"
                                value={otpCode.otpCode}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" onClick={() => verifyOTP()}>
                            {language[lang].OTPVerify}
                            {/*{loading ? <Spinner color="success"/> : ''}*/}
                        </button>
                    </div> : null
            }
        </div>
    )
}
export default forgetPassword;