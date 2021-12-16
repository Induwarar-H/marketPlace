import React from 'react'
import {lang, language} from "../../const/language";
import * as authService from '../../services/auth'
import * as commonFunc from "@/utils/commonFunc";


const forgetPassword = ()=>{
    const [username, setUsername] = React.useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUsername(prevState => ({...prevState, [name]: value}));
    };
    const getOtpCode = () => {
        console.log(username);
        let contact = username.username;
        authService.forgetPasswordOtp(contact).then(res=>{
            console.log(res)
            if (res.success){

            }else{
                commonFunc.notifyMessage(res.message,0)
            }
        })
    };

    return(
        <div className="login-form">
            <h2 style={{textAlign: 'center'}}>Reset Password</h2>

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
                        value={username.username}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" onClick={() => getOtpCode()}>
                    {language[lang].getYourOTP}
                    {/*{loading ? <Spinner color="success"/> : ''}*/}
                </button>
            </div>
        </div>
    )
}
export default forgetPassword;