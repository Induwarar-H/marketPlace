import React from 'react'
import ApplyAsInstructor from '../components/BecomeATeacher/ApplyAsInstructor'
import RegisterForm from '../components/BecomeATeacher/RegisterForm'
import PageBanner from "@/components/Common/PageBanner";
import PremiumAccessTwo from "@/components/Common/PremiumAccessTwo";
import FunFactsThree from "@/components/Common/FunFactsThree";

class BecomeTeacher extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PageBanner
                    pageTitle="Become A Teacher"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Become A Teacher"
                />

                <div className="ptb-100">
                    <PremiumAccessTwo />
                </div>

                <FunFactsThree />

                <ApplyAsInstructor />

                {/*<RegisterForm  />*/}

                {/* <Footer /> */}
            </React.Fragment>
        );
    }
}

export default BecomeTeacher