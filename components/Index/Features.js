import React from 'react'
import Link from 'next/link'

const Features = () => {
    return (
        <div className="features-area pt-100 pb-70 bg-fff8f8">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Learn anywhere, anytime remotely.</span>
                    <h2>Learn anywhere, anytime remotely</h2>
                    <p>Don't limit your knowledge. Complete your course from anywhere in the world.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="features-box">
                            <div className="icon">
                                <i className="flaticon-brain-process"></i>
                            </div>
                            <h3>Learn the Latest Skills</h3>
                            <p>Don't let new trends make your life harder, enhance your knowledge and skills up to date.</p>
                            <Link href="/courses-2">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                            <div className="back-icon">
                                <i className="flaticon-brain-process"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="features-box">
                            <div className="icon">
                                <i className="flaticon-shield-1"></i>
                            </div>
                            <h3>Learn from Industry Experts</h3>
                            <p>Don't let your job make your life harder, follow Industrial based courses from industrial experts.</p>
                            <Link href="/courses-2">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                            <div className="back-icon">
                                <i className="flaticon-shield-1"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="features-box">
                            <div className="icon">
                                <i className="flaticon-world"></i>
                            </div>
                            <h3>Learn From Anywhere</h3>
                            <p>Location is not a problem anymore, study from anywhere, anytime without limitations.
                            </p>
                            <Link href="/courses-2">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                            <div className="back-icon">
                                <i className="flaticon-world"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
