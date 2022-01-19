import React from "react";
import {Button, Modal} from "react-bootstrap"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import * as constants from '../../../const/constants'
import {lang, language} from "../../../const/language";
import * as commonFunc from "../../../utils/commonFunc";
import * as courseService from "../../../services/course";
import Files from "react-files";
import Cookies from "js-cookie";

class paymentModal extends React.Component {
    state = {
        depSlip: '',
        type: "",
        isSelectMonth: false,
        status: '',
        paymentDetails: [],
        promoCode: '',
        newPriceStatus: false,
        newPrice: 0,
        promoId: ''
    };

    componentDidMount() {
        console.log('payment 02')
    }


    purchaseHandler = (status) => {
        console.log('purchaseHandler', this.props.courseDetails.id)
        let obj = {
            courseId: this.props.courseDetails.id,
            promoCodeId: this.state.promoId,
            promoCode: this.state.promoCode,
        };
        commonFunc.submitHandler(obj);
    };
    onchange = async (event) => {
        await this.setState({promoCode: event.target.value})
    };

    calculateDisc = () => {
        console.log(this.state.promoCode);
        let discount, maxPrice, fee, discountPrice, newPrice;
        courseService.checkPromoCode(this.state.promoCode).then(res => {
            if (res.success) {
                console.log(res.body)
                discount = res.body.discount;
                maxPrice = res.body.maxPrice;
                fee = this.props.courseDetails.fee;

                discountPrice = fee * (discount / 100);
                if (discountPrice >= maxPrice) {
                    newPrice = fee - maxPrice
                } else {
                    newPrice = fee - discountPrice
                }
                console.log(newPrice, discountPrice);
                this.setState({newPrice: newPrice});
                this.setState({promoId: res.body.id})
                this.setState({newPriceStatus: true})
            } else {
                commonFunc.notifyMessage('Sorry, this voucher is not valid. Please check for any typing errors.', 0)
            }
        })

    };


    render() {
        let {depSlip, type} = this.state;
        let user = JSON.parse(localStorage.getItem("User"))
        return (
            <Modal className='payment-modal'

                   show={this.props.showModal}
                   size="lg"
            >
                <Modal.Header closeButton={true} onHide={() => this.props.closeView(false)}>

                    <Modal.Title><strong> Course Payment </strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={12} className={"card-section"}>
                            <div>


                                <Row style={{margin: '15px'}}>
                                    <Col md={8}>
                                        <input
                                            type="text"
                                            className="txtPromocode"
                                            placeholder='Enter Your Promo Code'
                                            name="otp"
                                            onChange={this.onchange}
                                        />

                                    </Col>
                                    <Col md={4} style={{height: '100%'}}>
                                        <Button className='btnApply'
                                                onClick={this.calculateDisc}>
                                            Apply
                                        </Button>
                                    </Col>
                                    <Col md={12} style={{marginTop: '10px'}}>
                                        <p style={{textAlign: 'center', opacity: '.5'}}><small>If you have a promo code,
                                            enter it and get a discount</small></p>
                                    </Col>

                                </Row>

                                <Row className='detailsText'>
                                    <Col md={5}>
                                        <p><strong>Student Name </strong></p>
                                        <p><strong>Course Name </strong></p>
                                        <p><strong>Fee </strong></p>
                                        {this.state.newPriceStatus ?
                                            <p><strong style={{color: '#293D60'}}>New Price </strong></p> : null}
                                    </Col>
                                    <Col md={1}>
                                        <p><strong>:</strong></p>
                                        <p><strong>:</strong></p>
                                        <p><strong>:</strong></p>
                                        {this.state.newPriceStatus ?
                                            <p><strong style={{color: '#293D60'}}>:</strong></p> : null}
                                    </Col>
                                    <Col md={6}>
                                        <p>{user.name}</p>
                                        <p>{this.props.courseDetails.name}</p>
                                        <p>{this.props.courseDetails.fee}</p>
                                        {this.state.newPriceStatus ?
                                            <p style={{color: '#293D60'}}>{this.state.newPrice}</p> : null}
                                    </Col>
                                </Row>

                            </div>

                            <div>
                                <Button className="log-btn"
                                        onClick={() => this.purchaseHandler(constants.CARD_TYPE)}>
                                    {language[lang].PayByCard}
                                </Button>
                            </div>
                            {/*<div className={"payment-note-wrapper"}>*/}
                            {/*    <p>*/}
                            {/*        {language[lang].cardPayment}*/}
                            {/*    </p>*/}
                            {/*</div>*/}

                        </Col>

                        {/*<Col xs={12} className="slip-section">*/}


                        {/*    <div className={"payment-note-wrapper"}>*/}
                        {/*        /!*<p className={"bold-text"}>{language[lang].paymentNote}:</p>*!/*/}
                        {/*        /!*<p>{language[lang].paymentNoteDesc}</p>*!/*/}
                        {/*        <p>*/}
                        {/*            <span className={"bold-text"}>{language[lang].paymentNote}: </span>*/}
                        {/*            {language[lang].paymentNoteDesc}*/}
                        {/*        </p>*/}
                        {/*        /!*<p className={"bold-text"}>{language[lang].paymentNoteMore} 0740783209/0740781643</p>*!/*/}
                        {/*    </div>*/}


                        {/*</Col>*/}

                    </Row>
                </Modal.Body>
            </Modal>
        )
    }
};

export default paymentModal;