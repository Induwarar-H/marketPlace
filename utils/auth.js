import cookie from 'js-cookie'
import Router from 'next/router'
import * as authService from '../services/auth'
import * as commonFunc from "@/utils/commonFunc";

export const handleLogin = (token) => {
    cookie.set('token', token);
    Router.push('/');
}

export const redirectUser = (ctx, location) => {
    if (ctx.req) {
        ctx.res.writeHead(302, {Location: location});
        ctx.res.end()
    } else {
        Router.push(location)
    }
}

export const handleLogout = () => {
    authService.logoutUser().then(res=>{
        commonFunc.notifyMessage(res.message)
    })
};