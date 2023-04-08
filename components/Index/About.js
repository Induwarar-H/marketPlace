import React from 'react'
import Link from 'next/link'

const About = (props) => {
    return (
        <div className="about-area ptb-100 bg-f9fbff">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src="/images/newImages/E-Learning%20(1).png" alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span className="sub-title">DISTANCE LEARNING</span>
                            <h2>Enhance your knowledge and develop your skill set from any corner of the world online.
                            </h2>
                            <p>Learn on your schedule, explore different courses and find the best suit course for you with lifetime access.
                            </p>
                            <ul className="features-list">
                                <li><span><i className="flaticon-experience"></i> Expert Instruction</span></li>
                                <li><span><i className="flaticon-time-left"></i> Lifetime Access</span></li>
                                <li><span><i className="flaticon-tutorials"></i> Remote Learning</span></li>
                                <li><span><i className="flaticon-self-growth"></i> Self Development</span></li>
                            </ul>
                            <Link href="/courses-2">
                                <a className="default-btn"><i className="flaticon-user"></i>View All Courses<span></span></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bulb"><img src="/images/bulb.png" alt="image" /></div>
        </div>
    )
}

export default About
