import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';

// import Footer from '../components/_App/Footer';
import * as courseService from '../services/course'
import MyCourses from '../components/MyCourses/MyCourses'

class MyCoursesView extends React.Component {
    state = {
        studentId: '',
        paidCourses: null
    };

    async componentDidMount() {
        await this.getPaidCourse();
       await console.log(this.state.paidCourses)

    }

    getPaidCourse = ()=>{
        courseService.getPaidCourses().then(res => {
            console.log(res.body)
            this.setState({paidCourses: res.body})
        })

    };

    render() {
        let paidCourses = this.state.paidCourses;
        console.log(paidCourses)
        return (
            <React.Fragment>
                {/* <Navbar /> */}
                <PageBanner
                    pageTitle="My Courses"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Paid Courses"
                />

                <div className="courses-area courses-section pt-100 pb-70">
                    {paidCourses ?
                        <div className="container">
                            <div className="edemy-grid-sorting row align-items-center">

                                <div className="col-lg-8 col-md-6 result-count">
                                    {this.state.paidCourses.length === 0 ?
                                        <p><strong> Sorry !! Still you didn't buy any course </strong></p> :
                                        <p>We found <span
                                            className="count">{this.state.paidCourses.length}</span> courses
                                            available for you</p>
                                    }
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

                            <div >
                                       <MyCourses paidCourses={paidCourses}/>

                            </div>
                        </div>:null
                    }
                </div>

                {/* <Footer /> */}
            </React.Fragment>
        )
    }
}

export default MyCoursesView;