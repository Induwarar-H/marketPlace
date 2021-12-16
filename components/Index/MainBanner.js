import React from 'react'
import Link from 'next/link'
import Cookies from "js-cookie";
import * as constants from "../../const/constants";

class MainBanner extends React.Component {
    state={
      userType:0
    };
    async componentDidMount() {
        let access_token = Cookies.get(constants.ACCESS_TOKEN);
        let userType = !access_token ? 0 : 1;
        await this.setState({userType: userType})
    }

    render() {
        console.log(this.state.userType)
        return (
            <div className="main-banner-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-content-style-two">
                                <h1>No Limits for Learning with Edulab</h1>
                                <p>Shouldn't limit your expectation <br/>
                                    Start you online learning  Complete a variety of courses online as you need and earn your certificate.
                                </p>
                                {this.state.userType !==1?
                                <Link href="/authentication">
                                    <a className="default-btn">
                                        <i className="flaticon-user"></i>Join For Free<span></span>
                                    </a>
                                </Link>:null}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-image-style-two">
                                <img width={800} src="/images/banner-img4.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-shape2">
                    <img src="/images/banner-shape2.png" alt="image" />
                </div>
                <div className="banner-shape3">
                    <img src="/images/banner-shape3.png" alt="image" />
                </div>

            </div>
        )
    }

}

export default MainBanner
