import React from 'react'
import {Alert, Input, Spinner} from 'reactstrap'
import Link from 'next/link'
import axios from 'axios'
import catchErrors from '../../utils/catchErrors'
import baseUrl from '../../utils/baseUrl'
import {handleLogin} from '../../utils/auth'
import * as authService from '../../services/auth'

const INITIAL_USER = {
    name: '',
    email: '',
    mobile: '',
    password: '',
    gender: '',
    school: '',
    address:'',
    district:'',
    province :'',
    dob:'',
    grade:'',
    confirmPassword: ''
}

const RegisterForm = (props) => {
    const [user, setUser] = React.useState(INITIAL_USER);
    const [disabled, setDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
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

    const handleSubmit = async e => {
        console.log(user);

        authService.userRegisterCheck(user).then(res=>{
            console.log(res)
        })
        // e.preventDefault();
        // // console.log(user)
        // try {
        //     setLoading(true)
        //     setError('')
        //     const url = `${baseUrl}/api/v1/auth/signup`
        //     const payload = {...user};
        //     const response = await axios.post(url, payload)
        //     handleLogin(response.data);
        //     // console.log(response.data)
        // } catch (error) {
        //     catchErrors(error, setError)
        // } finally {
        //     setLoading(false);
        // }
    };

    const handlePasswordMatching =()=>{

        if (user.password.trim() !== user.confirmPassword.trim()){
            console.log('not match');
            setStyleError(false)
        }else{
            setStyleError(true)
        }
    };

    const navToRegistration = () => {
        props.loginmodel('LOGIN');
    };

    const styleErrorPack = {
        border:'red solid 2px',
    };
    const styleOkPack = {
        border:'white solid 2px'
    };

    return (
        <div className="login-form register-form">
            <h2>Register</h2>
            <Alert color="danger" isOpen={error ? true : false} toggle={onDismiss}>
                {error}
            </Alert>

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
                        <option value={"male"}>
                            Male
                        </option>
                        <option value={"female"}>
                            Female
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
                        style={!styleError ? styleErrorPack:styleOkPack}
                        className="form-control"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        onBlur={handlePasswordMatching}
                    />
                    <small> Your Password is not matched </small>
                </div>


                <p className="description">The password should be at least eight characters long. To make it stronger,
                    use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )</p>

                <button type="submit" onClick={handleSubmit}>
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
                        <a className="lost-your-password">ඔබට ගිණුමක් තිබේනම් (Already have an account? Sign in now)</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RegisterForm;