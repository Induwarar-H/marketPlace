import React from 'react'
import Link from 'next/link'

const Instance = () => {
    return (
        <div className="get-instant-courses-area-two bg-f9fbff">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <div className="get-instant-courses-content-style-two">
                            <span className="sub-title">GET INSTANT ACCESS TO THE FREE</span>
                            <h2>Explore free courses and start freshly </h2>
                            <p>Edulab marketplace offers a variety of free courses, to provide you a chance to boost your life through education. We believe these courses will help you to build a futuristic professional tomorrow.

                            </p>
                            <Link href="/authentication">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i>Start For Free<span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="get-instant-courses-image-style-two">
                            <img src="/images/newImages/Blog.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bulb"><img src="/images/bulb2.png" alt="image" /></div>
        </div>
    )
}

export default Instance
