import React, {useEffect} from "react";
import PageBanner from "@/components/Common/PageBanner";
import CourseDetails from "@/components/CourseDetails/CourseDetails";
import * as courseService from "../../services/course";

const Course = () => {
    const [courses, setCourses] = React.useState(null);

    useEffect(() => {
        fetchCourse();
    }, []);

    const fetchCourse = async () => {
        await courseService.loadAllCourses().then(res => {
            if (res.success) {
                setCourses(res.body);
            }
        }).catch(err => {
            console.log(err)
        })
    };

   return (
        <React.Fragment>
            {courses ?
                <PageBanner
                    pageTitle="Best Courses"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Best Courses"
                />
                :   <PageBanner
                    pageTitle="Loading..."
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Loading..."
                />}
            {courses ?
                <div className="courses-area courses-section pt-100 pb-70">
                    <div className="container">
                        <div className="edemy-grid-sorting row align-items-center">
                            <div className="col-lg-8 col-md-6 result-count">
                                <p>We found <span className="count">{courses.content.length}</span> courses available for you !!</p>
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
                            <CourseDetails/>
                        </div>
                    </div>
                </div>
                : null}
            {/* <Footer /> */}
        </React.Fragment>
    )
};

export default Course;