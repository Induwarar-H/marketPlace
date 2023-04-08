/**
 * Created by WebStorm.
 * User: athukorala
 * Date: 8/20/20
 * Time: 4:22 PM
 */
import React, {Component} from 'react';
import * as constants from "../../const/constants";
import * as courseService from "../../services/course";
import * as commonFunc from "@/utils/commonFunc";
import Cookies from "js-cookie";
import Router from "next/router";

class PaymentAuthentication extends Component {

    async componentDidMount() {

        let location = window.location.href;
        console.log(location);
        if (location.indexOf("tr=") !== -1 && location.indexOf("mur=") !== -1) {
            let transactionId = location.split("tr=")[1].split("&")[0];
            let merchantRID = location.split("mur=")[1].split("&")[0];

            const obj = {
                "transactionId": transactionId,
                "merchantRID": merchantRID
            };
            console.log(obj)
            await courseService.completeCardPayment(obj)
                .then(response => {
                    commonFunc.notifyMessage(response.message, response.status);
                    if (response.success) {
                        this.resultPage("SUCCESS");
                    } else {
                        this.resultPage("ERROR");
                    }
                })

        } else {
            // commonFunc.notifyMessage("Payment", 0);
            this.resultPage("ERROR", null);
        }
    }

    resultPage = (status) => {
        console.log(status);
        if (status === "SUCCESS") {
            console.log('redirect to main page')
            Router.push('/myCoursesView')
        if (status === "ERROR") {
            console.log('ERROR');
            Router.push('/')
        }
        }
    };

    render() {
        console.log('payment Authentication')
        return (
            <div className={"payment-authorize"}>
                <div className={"main"}>


                    <div className={"loader-teach-css"}>
                        <div className={"loader-wrapper"}>
                            <div className={"loader-main"}>

                                <div className={"f-f mr-1"}>
                                    Authorising, please wait
                                </div>
                                <div className="loader"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaymentAuthentication;

