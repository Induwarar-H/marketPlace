import React from 'react'
import {Alert, Spinner} from 'reactstrap'
import Link from 'next/link'
import axios from 'axios'
import catchErrors from '../../utils/catchErrors'
import baseUrl from '../../utils/baseUrl'
import {handleLogin} from '../../utils/auth'
import qs from 'qs';
import * as authService from '../../services/auth'
import * as commonFunc from '../../utils/commonFunc'
import * as validator from '../../utils/validator'
import {lang, language} from "../../const/language"
import * as constants from '../../const/constants'
import Cookies from "js-cookie";

const INITIAL_USER = {
    email: '',
    password: ''
};

class LoginForm extends React.Component {

    state = {
        username: '',
        password: '',
    };

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name === "username") if (!validator.onlyDigit.test(value) && value.length !== 0) return;
        this.setState({[name]: value});
    };

    handleSubmit = async e => {
        console.log('handleSubmit')
        let {username, password} = this.state;
        // username.trim() === "" ? commonFunc.notifyMessage(language[lang].MobileNumberCannotBeEmpty) :
        //     password.trim() === "" ? commonFunc.notifyMessage(language[lang].PasswordCannotBeEmpty) :
                this.fetchHandler();
    };

    fetchHandler = () => {
        console.log('fetchHandler');
        let {username, password} = this.state;
        const obj = {
            username: username,
            password: password,
            grant_type: 'password',
        };


        authService.loginUser(qs.stringify(obj)).then(response => {
            console.log(response);
            if (response.access_token) {
                Cookies.set(constants.ACCESS_TOKEN, response.access_token);
                Cookies.set(constants.REFRESH_TOKEN, response.refresh_token);
                Cookies.set(constants.VERIFY_CODE, response.verify_code);
                // this.props.userDetailsHandler(response.user.userDetails);
                return;
            }
            if (!response.success) {
                commonFunc.notifyMessage(response.message, response.status)
                console.log(response.message)
            }

        });
    };

    navToRegistration = async => {
        this.props.loginmodel('REG');
    };

    render() {
        let {username, password} = this.state;
        return (
            <div className="login-form">
                <h2 style={{textAlign: 'center'}}>Login</h2>

                {/*<Alert color="danger" isOpen={error ? true : false} toggle={onDismiss}>*/}
                {/*    {error}*/}
                {/*</Alert>*/}

                <div>
                    <div className="form-group">
                        <label>Email/Mobile number</label>
                        <input
                            className="form-control"
                            placeholder="Email / MobileNumber"
                            name="username"
                            type="username"
                            value={username}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                            <p>
                                <input type="checkbox" id="test2"/>
                                <label htmlFor="test2">Remember me</label>
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                            <Link href="/reset-password">
                                <a className="lost-your-password">Lost your password?</a>
                            </Link>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 lost-your-password-wrap" style={{marginTop: 20}}>
                            <div onClick={() => {
                                this.navToRegistration()
                            }}>
                                <a className="lost-your-password">haven't account</a>
                            </div>
                        </div>
                    </div>

                    <button type="submit" onClick={() => this.handleSubmit()}>
                        Log In
                        {/*{loading ? <Spinner color="success"/> : ''}*/}
                    </button>
                </div>
            </div>

        )
    }


}


export default LoginForm;