import React, {useState, useEffect}  from 'react'
import MainBanner from '@/components/Index/MainBanner'
import Features from '@/components/Index/Features'
import TopCourses from '@/components/Index/TopCourses'
import About from '@/components/Index/About'
import Testimonials from '@/components/Index/Testimonials'
import Instance from '@/components/Index/Instance'
import Partner from '@/components/Index/Partner'
import Ad from '@/components/Index/Ad'
import Funfacts from '@/components/Index/Funfacts'
import Blog from '@/components/Index/Blog'
import EdemyPremium from '@/components/Index/EdemyPremium'
import axios from 'axios'
import baseUrl from '@/utils/baseUrl'
import Cookies from "js-cookie";
import * as constants from "../const/constants";

const Index = ({courses, props}) => {

    const [userType, setUserType] = React.useState(0);
    useEffect(() => {
        let access_token = Cookies.get(constants.ACCESS_TOKEN);
        let userType = !access_token ? 0 : 1;
        setUserType(userType);

    }, []);
    return (
        <React.Fragment>
            <MainBanner/>
            {/*<TopCourses courses={courses} />*/}
            <About userType={userType}/>
            {/*<Testimonials/>*/}
            <Features/>
            {/*<Partner/>*/}
            <Instance/>
            <Ad/>
            {/*<Funfacts/>*/}
            {/*<Blog />*/}
            <EdemyPremium userType={userType}/>
        </React.Fragment>
    )
};

Index.getInitialProps = async (context) => {
    console.log('in page Index context',context)
    const url = `${baseUrl}/api/v1/courses/homepage-courses`
    const response = await axios.get(url)
    return response.data
};

export default Index