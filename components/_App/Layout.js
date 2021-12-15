import React from 'react'
import Head from "next/head"
import {ToastProvider} from 'react-toast-notifications'
import {Toaster} from 'react-hot-toast'
import Router from 'next/router'
import GoTop from './GoTop'
import Navbar from './Navbar'
import Footer from './Footer'
import StudentNavbar from './StudentNavbar'
import AdminNavbar from './AdminNavbar'
import Preloader from './Preloader'
import "toastr/build/toastr.min.css"
import Cookies from "js-cookie";
import * as constants from "../../const/constants";

const Layout = ({children, user}) => {

    const [loader, setLoader] = React.useState(true);
    const [userObject, setUserObject] = React.useState([]);

    React.useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1000);
        if (localStorage) {

            setUserObject(JSON.parse(localStorage.getItem('User')))
        }
        user = JSON.parse(localStorage.getItem('User'))
    }, [])

    Router.events.on('routeChangeStart', () => {
        setLoader(true)
    })
    Router.events.on('routeChangeComplete', () => {
        setLoader(false)
    })
    Router.events.on('routeChangeError', () => {
        setLoader(false)
    });
    //  let userLogin = localStorage.getItem("User");
    let access_token = Cookies.get(constants.ACCESS_TOKEN);
    let userType = !access_token ? 0 : 1;

    return (
        <React.Fragment>
            <Head>
                <title>Edulab MarketPlace</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content="Edulab MarketPlace"/>
                <meta name="og:title" property="og:title" content="Edulab MarketPlace"></meta>
                <meta name="twitter:card" content="Edulab MarketPlace"></meta>
                {/*<link rel="canonical" href="https://edemy-react.envytheme.com/"></link>*/}
            </Head>

            {loader && <Preloader/>}

            <Toaster
                position="top-left"
                reverseOrder={false}
            />

            <ToastProvider
                placement='bottom-left'
                autoDismissTimeout={10000}
                autoDismiss
            >

                <Navbar user={userObject} userType={userType}/>


                {children}

                <GoTop scrollStepInPx="100" delayInMs="10.50"/>

                <Footer/>
            </ToastProvider>
        </React.Fragment>
    );
}

export default Layout;