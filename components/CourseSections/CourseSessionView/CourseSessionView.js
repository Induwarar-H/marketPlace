import React from "react";
import dynamic from "next/dist/shared/lib/dynamic";
import swal from "sweetalert";
import * as constants from "../../../const/constants";
import {lang, language} from "../../../const/language";
import PaymentModal from "@/components/Models/payment/paymentModal";

const ModalVideo = dynamic(import("react-modal-video"));

class CourseSessionView extends React.Component {
    state = {
        sections: [],
        courseDetails: '',
        videoUrl: '',
        viewVideo: false,
        setIsOpen: false,
        isOpen:false,
        userType:'',
        PaymentView:false
    };

    async componentDidMount() {
        await this.setState({
            sections: this.props.courseSections,
            courseDetails:this.props.courseDetails,
            userType:this.props.userType
        })
    }

    viewPreview = async (url) => {

        const myArray = url.split("/");
        console.log('Video Url',  myArray[2]);
        await this.setState({videoUrl: myArray[2], viewVideo: true})
    };


    openModal =(url)=> {
        this.setState({isOpen: true});
        this.viewPreview(url)
    }

    lockVideo = ()=>{
        console.log(this.state.courseDetails);
        console.log('lock this video')
        this.buyThisCourse();
    };

     viewModel = async (value) => {
        await this.setState({PaymentView:value});
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

    render() {
        console.log(this.props.courseSections);
        return (
            this.state.sections ?
                <div>
                    {this.state.sections != null ?
                        <div>
                                <ModalVideo
                                    channel='vimeo'
                                    isOpen={this.state.isOpen}
                                    videoId={this.state.videoUrl}
                                    onClose={() => this.setState({isOpen: false})}
                                />

                            <PaymentModal showModal={this.state.PaymentView} closeView={this.viewModel} courseDetails={this.state.courseDetails}/>
                            {this.state.sections.map((element, index) => {
                                return <div key={index + 'name'}>
                                    <h3>{element.name}</h3>
                                    <ul>
                                        {element.contents.map((content, id) =>
                                            <div>
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
                                                            {content.preview ?
                                                                <span className="status" onClick={() => {
                                                                    this.openModal(content.url)
                                                                }}>Preview</span> :
                                                                <span onClick={()=>this.lockVideo()} className="status locked"><i
                                                                    className="flaticon-password"></i></span>
                                                            }

                                                        </div>
                                                    </a>
                                                </li>
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