import React, {useState, useEffect} from "react";
import * as  courseService from '../../services/course'
import * as  commonFunc from '../../utils/commonFunc'
import * as constants from "../../const/constants";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Cookies from "js-cookie";
import PageBanner from "@/components/SingleCourses/PageBanner";
import StaticCoursesDetailsSidebar from "@/components/SingleCourses/StaticCoursesDetailsSidebar";
import CourseSessionView from "@/components/CourseSections/CourseSessionView/CourseSessionView";
import swal from "sweetalert";
import {lang, language} from "../../const/language";
import PaymentModal from "@/components/Models/payment/paymentModal";

const CourseDetails = (props) => {
    const [courseId, setCourseId] = React.useState();
    const [userType, setUserType] = React.useState(0);
    const [courseDetails, setCourseDetails] = React.useState(null);
    const [paymentView, setPaymentView] = React.useState(false);

    useEffect(() => {
        setCourse();
        getCourseDetailsById();
        let access_token = Cookies.get(constants.ACCESS_TOKEN);
        let userType = !access_token ? 0 : 1;
        setUserType(userType);

    }, []);

    const setCourse = async () => {
        await setCourseId(props.courseId);
    };

    const getCourseDetailsById = async () => {
        console.log('getCourseDetailsById', props.courseId);
        if (props.courseId !== undefined) {
            await courseService.getCourseDetailsById(props.courseId).then(async res => {
                if (res.success) {
                    await setCourseDetails(res.body);
                } else {
                    commonFunc.notifyMessage(res.message, 0)

                }
            }).catch(err => {
                console.log(err)
            })
        }
    };

    if (courseDetails !== null) {
        console.log("if else check", courseDetails.name)
    }
    const viewModel = async (value) => {
        await setPaymentView(value);
    };

    const buyThisCourse = () => {
        let obj = {
            "courseId": courseDetails.id,
            "studentId": 1,
            "promoCode": " "
        };

        if (userType === 1) {
            swal({
                title: constants.ALERT_TEXT,
                icon: null,
                closeOnClickOutside: false,
                buttons: {
                    cancel: language[lang].NoText,
                    dangerMode: {
                        text: language[lang].YesText,
                        value: "action",
                        className: "okay-btn"
                    }
                },
            }).then((value) => {
                switch (value) {
                    case "action":
                        viewModel(true);
                        //  commonFunc.submitHandler(obj);
                        break;
                    default:
                        break;
                }
            });
        } else {

            swal({
                title: language[lang].StudentSignInWarning4,
                icon: null,
                closeOnClickOutside: false,
                buttons: {
                    cancel: language[lang].NotNowText,
                    dangerMode: {
                        text: language[lang].OkayText,
                        value: "action",
                        className: "okay-btn"
                    }
                },
            }).then((value) => {
                switch (value) {
                    case "action":
                        signInAgain();
                        break;
                    default:
                        break;
                }
            });
        }
    };


    const testDesc = 'Text Desc,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque, consequatur, culpa dolores eligendi enim fuga iure labore minima nostrum obcaecati provident qui quis rem repudiandae sint soluta sunt unde.';
    return <div>
        <React.Fragment>

            {courseDetails ?

                <PageBanner
                    pageTitle={courseDetails.name}
                    homePageUrl="/"
                    homePageText="Home"
                    innerPageUrl="/courseView"
                    innerPageText="Courses"
                    activePageText={courseDetails.name}
                /> : null
            }
            {courseDetails ?
                <div className="courses-details-area pb-100 selectedCourseView">
                    <div className="courses-details-image cover-img" align='center'>
                        <img src={courseDetails.imageUrl} className="blur-img" alt="image"/>
                        <img src={courseDetails.imageUrl} className="slideshow-pro-image" alt="image"/>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="courses-details-desc">
                                    <Tabs>
                                        <TabList>
                                            <Tab>home</Tab>
                                            <Tab>Curriculum</Tab>
                                            <Tab>Instructor</Tab>
                                            <Tab>Reviews</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="courses-overview">
                                                        <h3>Course Description</h3>
                                                        <p style={{whiteSpace: ''}}>{courseDetails.description}</p>

                                                        <h3>Certification</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                            do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                            Quis
                                                            ipsum suspendisse ultrices gravida. Risus commodo viverra
                                                            maecenas
                                                            accumsan lacus vel facilisis.</p>
                                                        <h3>Who this course is for</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                            do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                            Quis
                                                            ipsum suspendisse ultrices gravida. Risus commodo viverra
                                                            maecenas
                                                            accumsan lacus vel facilisis.</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <ul className="detailsList">
                                                        <li className="price">
                                                            <div
                                                                className="d-flex justify-content-between align-items-center">
                                                                <span><i className="flaticon-tag"></i> Price</span>
                                                                <strong> Rs {courseDetails.fee}.00 </strong>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div
                                                                className="d-flex justify-content-between align-items-center">
                                                                <span><i
                                                                    className="flaticon-teacher"></i> Instructor</span>
                                                                <p style={{textAlign: 'right'}}> {courseDetails.teacher.name} </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div
                                                                className="d-flex justify-content-between align-items-center">
                                                                <span><i className="flaticon-time"></i> Duration</span>
                                                                7 weeks
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div
                                                                className="d-flex justify-content-between align-items-center">
                                                                <span><i
                                                                    className="flaticon-distance-learning"></i>{" "}Lessons</span>
                                                                25
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div
                                                                className="d-flex justify-content-between align-items-center">
                                                                <span><i className="flaticon-web"></i> Enrolled</span>
                                                                255 students
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div
                                                                className="d-flex justify-content-between align-items-center">
                                                                <span><i className="flaticon-lock"></i> Access</span>
                                                                {courseDetails.courseAccess}
                                                            </div>
                                                        </li>
                                                        {courseDetails.courseEnroll === null ?
                                                            <li>
                                                                <a className="default-btn buy-btn"
                                                                   onClick={buyThisCourse}>
                                                                    <i className="flaticon-tag"></i> Buy Now{" "}
                                                                    <span></span>
                                                                </a>
                                                            </li> :
                                                            <li>
                                                                <a aria-disabled="true" className="default-btn buy-btn">
                                                                    You Paid for this Course{" "}
                                                                    <span></span>
                                                                </a>
                                                            </li>
                                                        }
                                                    </ul>
                                                </div>

                                            </div>


                                        </TabPanel>

                                        <TabPanel>
                                            <div className="courses-curriculum">
                                                <CourseSessionView
                                                    courseSections={courseDetails.courseSections}
                                                    courseDetails={courseDetails}
                                                    userType={userType}
                                                />
                                            </div>
                                        </TabPanel>

                                        <TabPanel>
                                            <div className="courses-instructor">
                                                <div className="single-advisor-box">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-4 col-md-4">
                                                            <div className="advisor-image">
                                                                <img src="/images/advisor/advisor2.jpg" alt="image"/>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-8 col-md-8">
                                                            <div className="advisor-content">
                                                                <h3>{courseDetails.teacher.name}</h3>
                                                                <span className="sub-title">Agile Project Expert</span>
                                                                <p>{courseDetails.teacher.description !== null ? courseDetails.teacher.description :
                                                                    testDesc
                                                                }</p>

                                                                <ul className="social-link">
                                                                    <li><a href="#" className="d-block" target="_blank"><i
                                                                        className='bx bxl-facebook'></i></a></li>
                                                                    <li><a href="#" className="d-block" target="_blank"><i
                                                                        className='bx bxl-twitter'></i></a></li>
                                                                    <li><a href="#" className="d-block" target="_blank"><i
                                                                        className='bx bxl-instagram'></i></a></li>
                                                                    <li><a href="#" className="d-block" target="_blank"><i
                                                                        className='bx bxl-linkedin'></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>

                                        <TabPanel>
                                            <div className="courses-reviews">
                                                <h3>Course Rating</h3>
                                                <div className="rating">
                                                    <span className="bx bxs-star checked"></span>
                                                    <span className="bx bxs-star checked"></span>
                                                    <span className="bx bxs-star checked"></span>
                                                    <span className="bx bxs-star checked"></span>
                                                    <span className="bx bxs-star"></span>
                                                </div>
                                                <div className="rating-count">
                                                    <span>4.1 average based on 4 reviews.</span>
                                                </div>
                                                <div className="row">
                                                    <div className="side">
                                                        <div>5 star</div>
                                                    </div>
                                                    <div className="middle">
                                                        <div className="bar-container">
                                                            <div className="bar-5"></div>
                                                        </div>
                                                    </div>
                                                    <div className="side right">
                                                        <div>02</div>
                                                    </div>
                                                    <div className="side">
                                                        <div>4 star</div>
                                                    </div>
                                                    <div className="middle">
                                                        <div className="bar-container">
                                                            <div className="bar-4"></div>
                                                        </div>
                                                    </div>
                                                    <div className="side right">
                                                        <div>03</div>
                                                    </div>
                                                    <div className="side">
                                                        <div>3 star</div>
                                                    </div>
                                                    <div className="middle">
                                                        <div className="bar-container">
                                                            <div className="bar-3"></div>
                                                        </div>
                                                    </div>
                                                    <div className="side right">
                                                        <div>04</div>
                                                    </div>
                                                    <div className="side">
                                                        <div>2 star</div>
                                                    </div>
                                                    <div className="middle">
                                                        <div className="bar-container">
                                                            <div className="bar-2"></div>
                                                        </div>
                                                    </div>
                                                    <div className="side right">
                                                        <div>05</div>
                                                    </div>
                                                    <div className="side">
                                                        <div>1 star</div>
                                                    </div>
                                                    <div className="middle">
                                                        <div className="bar-container">
                                                            <div className="bar-1"></div>
                                                        </div>
                                                    </div>
                                                    <div className="side right">
                                                        <div>00</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="courses-review-comments">
                                                <h3>3 Reviews</h3>
                                                <div className="user-review">
                                                    <img src="/images/user1.jpg" alt="image"/>

                                                    <div className="review-rating">
                                                        <div className="review-stars">
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                        </div>

                                                        <span className="d-inline-block">James Anderson</span>
                                                    </div>

                                                    <span className="d-block sub-comment">Excellent</span>
                                                    <p>Very well built theme, couldn't be happier with it. Can't wait
                                                        for future updates to see what else they add in.</p>
                                                </div>

                                                <div className="user-review">
                                                    <img src="/images/user2.jpg" alt="image"/>

                                                    <div className="review-rating">
                                                        <div className="review-stars">
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star'></i>
                                                            <i className='bx bxs-star'></i>
                                                        </div>

                                                        <span className="d-inline-block">Sarah Taylor</span>
                                                    </div>

                                                    <span className="d-block sub-comment">Video Quality!</span>
                                                    <p>Was really easy to implement and they quickly answer my
                                                        additional questions!</p>
                                                </div>

                                                <div className="user-review">
                                                    <img src="/images/user3.jpg" alt="image"/>

                                                    <div className="review-rating">
                                                        <div className="review-stars">
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                        </div>

                                                        <span className="d-inline-block">David Warner</span>
                                                    </div>

                                                    <span className="d-block sub-comment">Perfect Coding!</span>
                                                    <p>Stunning design, very dedicated crew who welcome new ideas
                                                        suggested by customers, nice support.</p>
                                                </div>

                                                <div className="user-review">
                                                    <img src="/images/user4.jpg" alt="image"/>

                                                    <div className="review-rating">
                                                        <div className="review-stars">
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star checked'></i>
                                                            <i className='bx bxs-star'></i>
                                                        </div>

                                                        <span className="d-inline-block">King Kong</span>
                                                    </div>

                                                    <span className="d-block sub-comment">Perfect Video!</span>
                                                    <p>Stunning design, very dedicated crew who welcome new ideas
                                                        suggested by customers, nice support.</p>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div>


                        </div>
                    </div>
                </div> : null
            }


        </React.Fragment>
        {paymentView ?
            <PaymentModal showModal={paymentView} closeView={viewModel} courseDetails={courseDetails}/> : null
        }
    </div>

};

CourseDetails.getInitialProps = async (context) => {
    const courseId = context.query.id;
    return {courseId};
};

export default CourseDetails;