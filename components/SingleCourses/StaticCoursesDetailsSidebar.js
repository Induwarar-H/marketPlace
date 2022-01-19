import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import swal from "sweetalert";
import * as constants from "../../const/constants";
import {lang, language} from "../../const/language";
import {useRouter} from 'next/router'
import PaymentModal from '../../components/Models/payment/paymentModal'
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import * as commonFunc from "@/utils/commonFunc";

const ModalVideo = dynamic(import("react-modal-video"));

const StaticCoursesDetailsSidebar = (props) => {
    const router = useRouter()
    const [display, setDisplay] = React.useState(false);
    const [paymentView, setPaymentView] = React.useState(false);
    const [userType, setUserType] = React.useState();


    React.useEffect(() => {
        setDisplay(true);
        setUserType(props.userType);
    }, []);
    // Popup Video
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    };

    const viewModel = async (value) => {
        await setPaymentView(value);
    };

    const signInAgain = () => {
        router.push('/authentication')
    };

    const buyThisCourse = () => {
        let obj = {
            "courseId": props.courseDetails.id,
            "studentId": 1,
            "promoCode": " "
        }

        console.log(userType)
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
    console.log("staticSideBar", props.courseDetails)


    return (
        <React.Fragment>

            <PaymentModal showModal={paymentView} closeView={viewModel} courseDetails={props.courseDetails}/>
            {display ? (
                <ModalVideo
                    channel="youtube"
                    isOpen={!isOpen}
                    videoId="bk7McNUjWgw"
                    onClose={() => setIsOpen(!isOpen)}
                />
            ) : (
                ""
            )}

            <div className="courses-details-info">
                <div className="image">
                    <img src="/images/courses/courses1.jpg" alt="image"/>

                    <div
                        onClick={(e) => {
                            e.preventDefault();
                            openModal();
                        }}
                        className="link-btn popup-youtube"
                    ></div>

                    <div className="content">
                        <i className="flaticon-play"></i>
                        <span>Course Preview</span>
                    </div>
                </div>

                <ul className="info">
                    <li className="price">
                        <div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-tag"></i> Price
							</span>
                            {props.courseDetails.fee}
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-teacher"></i> Instructor
							</span>
                            {props.courseDetails.teacher.name}
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-time"></i> Duration
							</span>
                            7 weeks
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-distance-learning"></i>{" "}
                                Lessons
							</span>
                            25
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-web"></i> Enrolled
							</span>
                            255 students
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
							<span>
								<i className="flaticon-lock"></i> Access
							</span>
                            {props.courseDetails.courseAccess}
                        </div>
                    </li>
                </ul>

                <div className="btn-box">
                    <Link href="#">
                        <a className="default-btn">
                            <i className="flaticon-shopping-cart"></i> Add to
                            Cart <span></span>
                        </a>
                    </Link>
                    <div style={{marginTop: '10px'}} onClick={buyThisCourse}>
                        <a className="default-btn">
                            <i className="flaticon-tag"></i> Buy Now{" "}
                            <span></span>
                        </a>
                    </div>
                </div>

                <div className="courses-share">
                    <div className="share-info">
						<span>
							Share This Course <i className="flaticon-share"></i>
						</span>

                        <ul className="social-link">
                            <li>
                                <a href="#" className="d-block" target="_blank">
                                    <i className="bx bxl-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="d-block" target="_blank">
                                    <i className="bx bxl-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="d-block" target="_blank">
                                    <i className="bx bxl-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="d-block" target="_blank">
                                    <i className="bx bxl-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default StaticCoursesDetailsSidebar;
