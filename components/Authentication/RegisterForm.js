import React from 'react'
import {Alert, Input, Spinner} from 'reactstrap'
import Link from 'next/link'
import axios from 'axios'
import catchErrors from '../../utils/catchErrors'
import baseUrl from '../../utils/baseUrl'
import {handleLogin} from '../../utils/auth'
import * as authService from '../../services/auth'
import * as commonFunc from '../../utils/commonFunc';
import {lang, language} from "../../const/language";
import * as constants from "../../const/constants";
import swal from "sweetalert";
import * as validator from '../../utils/validator';

const INITIAL_USER = {
    name: '',
    email: '',
    mobile: '',
    gender: '',
    school: '',
    address: '',
    district: '',
    province: '',
    dob: '',
    grade: '',
    password: '',
    confirmPassword: '',
    otp:''
};

const RegisterForm = (props) => {
    const [user, setUser] = React.useState(INITIAL_USER);
    const [expireTime, setExpireTime] = React.useState(30);
    const [disabled, setDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [isOTP, setIsOtp] = React.useState(false);
    const [error, setError] = React.useState('');
    const [styleError, setStyleError] = React.useState(true);
    const onDismiss = () => setError(false);

    React.useEffect(() => {
        const isUser = Object.values(user).every(el => Boolean(el));
        isUser ? setDisabled(false) : setDisabled(true)
    }, [user]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(prevState => ({...prevState, [name]: value}));


    };
    const handleChangeDropDown = (e) => {
        console.log(e.target.value);
        setUser(prevState => ({...prevState, 'gender': e.target.value}))
    };

    const  countDown = () => {
        let isOtp =isOTP;
        let expireTime =expireTime;
        if(expireTime && expireTime > 0){
            setExpireTime({expireTime:(expireTime-1)})
        }
    };


    const getOtpHandler = async e => {
        console.log(user);
        let {name, gender, dob, school, address, email, mobile, grade, district, province, password, confirmPassword} = user;
        name.trim() === "" ? commonFunc.notifyMessage(language[lang].FullNameCannotBeEmpty) :
            !validator.emailRegex.test(email) ? commonFunc.notifyMessage("Please enter valid email address") :
                !validator.mobileNumValidator(mobile, 1) ? commonFunc.notifyMessage(language[lang].EnterValidMobileNumber) :
                    gender === "" ? commonFunc.notifyMessage("Gender cannot be empty") :
                        school.trim() === "" ? commonFunc.notifyMessage(language[lang].SchoolCannotBeEmpty) :
                            address.trim() === "" ? commonFunc.notifyMessage("Address cannot be empty") :
                                province === "" ? commonFunc.notifyMessage("Province cannot be empty") :
                                    district === "" ? commonFunc.notifyMessage("District cannot be empty") :
                                        dob === "" ? commonFunc.notifyMessage("Date of birth cannot be empty") :
                                            grade === "" ? commonFunc.notifyMessage("Grade cannot be empty") :
                                                !validator.passwordRegex.test(password) ? commonFunc.notifyMessage(constants.PASSWORD_TEXT) :
                                                    password !== confirmPassword ? commonFunc.notifyMessage(language[lang].PasswordDoNotMatch) :
                                                        swal({
                                                            title: constants.ALERT_TEXT,
                                                            icon: null,
                                                            closeOnClickOutside: false,
                                                            buttons: {
                                                                cancel: language[lang].NoText,
                                                                dangerMode: {
                                                                    text: language[lang].YesText,
                                                                    value: "action",
                                                                    className: "okay-btn"
                                                                }
                                                            },
                                                        }).then((value) => {
                                                            switch (value) {
                                                                case "action":
                                                                    registerHandler();
                                                                    break;
                                                                default:
                                                                    break;
                                                            }
                                                        });

    };


    const registerHandler = () => {
        authService.userRegisterCheck(user).then(res => {
            if (res.success) {
                commonFunc.notifyMessage(res.message, 1)
                setIsOtp(true);
            }else{
                commonFunc.notifyMessage(res.message, 0)
                setIsOtp(false);
            }
        })
    }

    const handlePasswordMatching = () => {

        if (user.password.trim() !== user.confirmPassword.trim()) {
            console.log('not match');
            setStyleError(false)
        } else {
            setStyleError(true)
        }
    };

    const navToRegistration = () => {
        props.loginmodel('LOGIN');
    };

    const sendOtpVerification =()=>{
        console.log(user.otp)
        authService.studentRegister(user).then(response=>{
            if (response.success) {
                commonFunc.notifyMessage(response.message, 1)
                navToRegistration();
            }else{
                commonFunc.notifyMessage(response.message, 0)
            }
        })
    };

    const styleErrorPack = {
        border: 'red solid 2px',
    };
    const styleOkPack = {
        border: 'white solid 2px'
    };

    return (
        <div className="login-form register-form">

            <h2>Register</h2>
            <Alert color="danger" isOpen={error ? true : false} toggle={onDismiss}>
                {error}
            </Alert>
            <div>
                {!isOTP ?
                    <div>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                type="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input
                                className="form-control"
                                placeholder="Mobile Number"
                                name="mobile"
                                type="mobile"
                                value={user.mobile}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Gender</label>
                            <Input
                                id="exampleSelect"
                                name="gender"
                                type="select"
                                value={user.gender}
                                onChange={handleChangeDropDown}
                            >
                                <option value={""}>
                                    Gender
                                </option>
                                <option value={"MALE"}>
                                    Male
                                </option>
                                <option value={"FEMALE"}>
                                    Female
                                </option>
                                <option value={"OTHER"}>
                                    Other
                                </option>

                            </Input>
                        </div>


                        <div className="form-group">
                            <label>School</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="School"
                                name="school"
                                value={user.school}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="address"
                                name="address"
                                value={user.address}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Province</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="province"
                                name="province"
                                value={user.province}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>District</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="district"
                                name="district"
                                value={user.district}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Date of birth</label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="dob"
                                name="dob"
                                value={user.dob}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Grade</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="grade"
                                name="grade"
                                value={user.grade}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                style={!styleError ? styleErrorPack : styleOkPack}
                                className="form-control"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={user.confirmPassword}
                                onChange={handleChange}
                                onBlur={handlePasswordMatching}
                            />
                            <small> Your Password is not matched </small>
                        </div>


                        <p className="description">The password should be at least eight characters long. To make it
                            stronger,
                            use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )</p>

                        <button type="submit" onClick={getOtpHandler}>
                            Register
                            {loading ? <Spinner color="success"/> : ''}
                        </button>

                        {/*<div>*/}
                        {/*    <p style={{textAlign:'right',marginTop:'10px'}}>ඔබට ගිණුමක් තිබේනම් (Already have an account? Sign in now)</p>*/}
                        {/*</div>*/}

                        <div className="col-lg-12 col-md-12 col-sm-12 lost-your-password-wrap" style={{marginTop: 20}}>
                            <div onClick={() => {
                                navToRegistration()
                            }}>
                                <a className="lost-your-password">ඔබට ගිණුමක් තිබේනම් (Already have an account? Sign in
                                    now)</a>
                            </div>
                        </div>

                    </div> :
                    <div>
                        <div style={{
                            backgroundColor: '#ffd5b7',
                            padding: '10px',
                            borderRadius: '10px',
                            border: '#fe6722 solid 2px',
                            margin:'10px'
                        }}>
                            <p style={{color: '#fe6722'}}>{language[lang].WeHaveSentAVerifyCodeToYourMobile}</p>
                        </div>

                        <div style={{marginTop:'30px'}} className="form-group">
                            <label>{language[lang].OTP} </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder={`${language[lang].OTP}`}
                                name="otp"
                                value={user.otp}
                                onChange={handleChange}
                            />
                        </div>

                        <button onClick={sendOtpVerification}>
                            {language[lang].OTPVerify}
                        </button>

                         <p className={"getOtpAgain"}>{language[lang].DidNotReceiveTheCode} <label className={'resend-text'} >{language[lang].Resend}</label></p>

                    </div>

                }
            </div>
        </div>
    )
}

export default RegisterForm;