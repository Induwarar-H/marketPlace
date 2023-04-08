import React from "react";
import {Modal} from "react-bootstrap"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ReactPlayer from 'react-player'

class CourseSessions extends React.Component {

    state = {
        session: null,
        videoUrl: ''
    };

    async componentDidMount() {
        // console.log(this.props);
        // if (this.props.courseSessionDetails.length !== 0) {
        //     await this.setState({session: this.props.courseSessionDetails})
        //     console.log(this.props)
        //     this.getVideoId()
        // }
    }


    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({session: this.props.courseSessionDetails})
        console.log(this.props.courseSessionDetails)
         this.getVideoId();
    }

    getVideoId = () => {
        let url = this.props.courseSessionDetails.url;
        const myArray = this.props.courseSessionDetails.url.split("/");
        this.setState({videoUrl: myArray[2]})
    };


    render() {
        let session = this.props.courseSessionDetails;
        console.log(this.state.videoUrl);
        let user = JSON.parse(localStorage.getItem("User"))
        return (
            session != undefined ?
                <Modal className='payment-modal'
                       show={this.props.showModal}
                       size="lg"
                >

                    <Modal.Header closeButton={true} onHide={() => this.props.closeView(false)}>
                        <Modal.Title><strong>{session.name} </strong></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col xs={12} className={"card-section"}>

                                <div>
                                    <h5><strong> Session Description </strong></h5>
                                    <p>{session.description}</p>
                                </div>

                                <div>
                                    <ReactPlayer
                                     //   url='https://vimeo.com/70591644'
                                        url={`https://player.vimeo.com/video/${this.state.videoUrl}`}
                                        controls={true}
                                        width='100%'
                                        height='500px'
                                        progressInterval={5000}
                                        onReady={(e)=>{
                                            console.log(e)}}
                                    />
                                </div>
                            </Col>


                        </Row>
                    </Modal.Body>


                </Modal> : null
        )
    }
};

export default CourseSessions;