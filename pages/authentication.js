import React from 'react'
import PageBanner from '../components/Common/PageBanner'
import LoginForm from '../components/Authentication/LoginForm'
import RegisterForm from '../components/Authentication/RegisterForm'
import ForgetPassword from '../components/Authentication/forgotPassword'
import {Card, CardBody} from "reactstrap";


class Authentication extends React.Component {
    state = {
        authType: 'LOGIN'
    };


    modelType = async (e) => {
        console.log(e);
        await this.setState({authType: e})
    };

    render() {
        return (
            <React.Fragment>
                <PageBanner
                    pageTitle="Authentication"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Authentication"
                />

                <div className="profile-authentication-area ptb-100">
                    <div className="container authentication">
                        <div className='row'>
                            <div className="col-2"></div>

                            {this.state.authType === 'LOGIN' ?
                                <div className="col-8">
                                    <LoginForm loginmodel={this.modelType}/>
                                </div> : this.state.authType === 'REG' ?
                                    <div className="col-8">
                                        <RegisterForm loginmodel={this.modelType}/>
                                    </div> :this.state.authType === 'FORGET' ?
                                        <div className="col-8">
                                            <ForgetPassword loginmodel={this.modelType}/>
                                        </div>:null
                            }
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Authentication;