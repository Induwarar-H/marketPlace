import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import CoursesSidebar from '../components/Courses/CoursesSidebar';
// import Footer from '../components/_App/Footer';

import CourseCardView from './courses/courseCardView'

const CoursesRightSidebar = () => {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            {/*<PageBanner */}
            {/*    pageTitle="Courses Right Sidebar" */}
            {/*    homePageUrl="/" */}
            {/*    homePageText="Home" */}
            {/*    activePageText="Courses Right Sidebar" */}
            {/*/>  */}

            <div className="courses-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="edemy-grid-sorting row align-items-center">
                                <div className="col-lg-8 col-md-6 result-count">
                                    <p>We found <span className="count">12</span> courses available for you</p>
                                </div>

                                <div className="col-lg-4 col-md-6 ordering">
                                    <div className="select-box">
                                        <select className="form-control">
                                            <option>Sort By</option>
                                            <option>Popularity</option>
                                            <option>Latest</option>
                                            <option>Price: low to high</option>
                                            <option>Price: high to low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <CourseCardView/>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <CoursesSidebar />
                        </div>
                    </div>
                </div>
            </div>
           
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default CoursesRightSidebar;