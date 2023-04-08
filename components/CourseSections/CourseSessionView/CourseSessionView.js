import React from "react";
import dynamic from "next/dist/shared/lib/dynamic";
import swal from "sweetalert";
import * as constants from "../../../const/constants";
import {lang, language} from "../../../const/language";
import PaymentModal from "@/components/Models/payment/paymentModal";
import CourseSessions from "@/components/Models/CourseSessions/CourseSessions";

const ModalVideo = dynamic(import("react-modal-video"));

class CourseSessionView extends React.Component {
    state = {
        sections: [],
        sectionDetails: [],
        courseDetails: '',
        videoUrl: '',
        viewVideo: false,
        setIsOpen: false,
        isOpen: false,
        userType: '',
        PaymentView: false,
        indexNo: '',
        modalView:false
    };

    async componentDidMount() {
        await this.setState({
            sections: this.props.courseSections,
            courseDetails: this.props.courseDetails,
            userType: this.props.userType
        })
    }

    viewPreview = async (url) => {

        const myArray = url.split("/");
        // console.log('Video Url', myArray[2]);
        await this.setState({videoUrl: myArray[2], viewVideo: true})
    };


    openModal = (url) => {
        console.log(url);
        console.log(this.state.courseDetails);
        this.setState({isOpen: true});
        this.viewPreview(url)
    };

    lockVideo = () => {
        console.log(this.state.courseDetails);
        // console.log('lock this video')
        this.buyThisCourse();
    };

    viewModel = async (value) => {
        await this.setState({PaymentView: value});
    };

    viewCourseSession = async (content, index) => {


        await this.setState({isOpen: !this.state.isOpen, indexNo: index});
        // if (value) {
        //     this.setSessionDetails(content)
        // }
    };

    setSessionDetails = async (content) => {
        await this.setState({sectionDetails: content})
    };

    buyThisCourse = () => {

        if (this.state.userType === 1) {
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
                        this.viewModel(true);
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

    videoModalVideo =(content)=>{
        this.setState({viewVideo:true})
        let url = content.url;
        const myArray = url.split("/");
        this.setState({videoUrl:myArray[2]})

    };
    closeModel =(value)=>{
        this.setState({viewVideo:value})
    };

    render() {
        console.log(this.state.sectionDetails);
        return (
            this.state.sections ?
                <div className='courseSessionView'>
                    {this.state.sections != null ?
                        <div>
                            <PaymentModal showModal={this.state.PaymentView} closeView={this.viewModel}
                                          courseDetails={this.state.courseDetails}/>
                            {/*{this.state.sectionDetails.length != 0 ?*/}
                            {/*    <CourseSessions showModal={this.state.isOpen} closeView={this.viewCourseSession}*/}
                            {/*                    courseSessionDetails={this.state.sectionDetails}*/}
                            {/*    /> : null*/}
                            {/*}*/}

                            <ModalVideo
                                channel='vimeo'
                                autoplay
                                isOpen={this.state.viewVideo}
                                videoId={this.state.videoUrl}
                                onClose={() => this.closeModel(false)}
                            />


                            {this.state.sections.map((element, index) => {
                                return <div key={index + 'name'}>
                                    <h3 style={{paddingTop: '30px'}}>{element.name}</h3>
                                    <ul>
                                        {element.contents.map((content, id) =>
                                            <div key={id + 'content'}>
                                                <li>
                                                    <a href="#"
                                                       className="d-flex justify-content-between align-items-center">
                                                        <span className="courses-name">{content.name}</span>
                                                        <div className="courses-meta">
                                                            {/*<span className="questions">5 questions</span>*/}
                                                            <span className="duration">
                                                            {parseInt(content.duration / 60, 10) < 59 ?
                                                                <> {
                                                                    parseInt(content.duration / 60, 10)
                                                                } Min
                                                                </> : <> {
                                                                    parseInt(content.duration / 60, 10)
                                                                } hours
                                                                </>}
                                                            </span>

                                                            {this.props.courseDetails.courseEnroll != null ?
                                                                <span className="status" onClick={(e) => {

                                                                    e.preventDefault();
                                                                    this.viewCourseSession(content, content.name)
                                                                }}>View</span> :
                                                                content.preview ?
                                                                    <span className="status" onClick={() => {
                                                                        this.openModal(content.url)
                                                                    }}>Preview</span> :
                                                                    <span onClick={() => this.lockVideo()}
                                                                          className="status locked"><i
                                                                        className="flaticon-password"></i></span>
                                                            }


                                                            {/*<Collapse isOpened={this.state.isOpen}>*/}
                                                            {/*    <p>Paragraph of text</p>*/}
                                                            {/*    <p>Another paragraph is also OK</p>*/}
                                                            {/*    <p>Images and any other content are ok too</p>*/}
                                                            {/*</Collapse>*/}

                                                        </div>
                                                    </a>

                                                </li>
                                                {this.state.isOpen && this.state.indexNo === content.name ?
                                                    <div className='row'>
                                                        <div className="col-md-12">
                                                            <p style={{marginTop:'10px'}}>{content.description}</p>
                                                        </div>
                                                        <div className="col-md-12">
                                                          <button className="viewMore-btn" onClick={(e) => {
                                                              e.preventDefault();
                                                              this.videoModalVideo(content)
                                                          }}>View Session Video</button>
                                                        </div>

                                                        <hr/>
                                                    </div> : null}
                                            </div>)}

                                    </ul>
                                </div>
                            })}
                        </div>
                        : null
                    }
                </div> : null
        )
    }
}

export default CourseSessionView;