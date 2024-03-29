import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import '../styles/boxicons.min.css'
import '../styles/meanmenu.min.css'
import '../styles/flaticon.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'react-tabs/style/react-tabs.css'
import 'react-image-lightbox/style.css'
import '../styles/style.css'
import '../styles/responsive.css'
import '../styles/authentication.scss'
import '../components/Authentication/authentication.css'
import '../pages/style-pages/courseTile.scss'
import '../components/CourseDetails/selectedCourseView.scss'
import '../components/Models/payment/PaymentModal.scss'
import '../components/CourseSections/CourseSessionView/courseSessionView.scss'
// If you want RTL style, comment out below line
// import '../styles/rtl.css'

import Layout from '../components/_App/Layout';
import axios from 'axios'
import { parseCookies, destroyCookie } from 'nookies'
import { redirectUser } from '../utils/auth'
import baseUrl from '../utils/baseUrl'

const MyApp =  ({ Component, pageProps }) => {
    // console.log(pageProps)
    return (
        <Layout {...pageProps}>
            <Component {...pageProps} />
        </Layout>
    )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    const { token } = parseCookies(ctx);
    let pageProps = {};

    if(Component.getInitialProps){
        pageProps = await Component.getInitialProps(ctx)
    }
    if(!token){
        console.log(ctx);
        // if a user not logged in then user can't access those pages
        const isProtectedRoute = ctx.pathname === '/become-a-teacher'
        || ctx.pathname === '/my-courses'
        || ctx.pathname === '/teacher/courses'

        if(isProtectedRoute){
            redirectUser(ctx, '/authentication');
        }
    } else {
        // if a user logged in then user can't access those pages
        const ifLoggedIn = ctx.pathname === '/authentication'
        || ctx.pathname === '/reset-password'
        if(ifLoggedIn){
            alert('home page');
            redirectUser(ctx, '/')

        }
        try {
            const payload = { headers: { Authorization: token } }
            const url = `${baseUrl}/api/v1/auth/account`
            const response = await axios.get(url, payload)
            const user = response.data

            // console.log(user)
            // If user status disabled then user autometically logged out
            if(!user || !user.active){
                destroyCookie(ctx, "token")
            }
            
            pageProps.user = user
        } catch (error) {
            // console.error("Error getting current user", error);
            //invalid token
            // console.log(error)
            destroyCookie(ctx, "token");
        }
    }
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        pageProps
    }
}

export default MyApp