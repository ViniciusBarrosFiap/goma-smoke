"use client"
import FormSignUp from "@/components/FormLogin/FormLogin"
import Header from "@/components/Header/Header"
import Logo from "@/components/Logo/page"
import "../../global.scss"
import { useEffect, useState,  } from "react"
import {parseCookies} from 'nookies';
import { checkToken } from "@/utils/verify-jwt"
import Loader from "@/components/Loader/page"
function Login(){
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [userType, setUserType] = useState(null)
    useEffect(() => {
        const cookies = parseCookies()
        const token = cookies.token;
        
        if (token) {
            const payload = checkToken(token);
            if (payload && typeof payload === 'object' && 'userType' in payload) {
                setLoggedIn(true)
                setUserType(payload.userType)
            }
        }
        setLoading(false);
    }, [])
    if (loading) {
        return <Loader/>;
    }
    return(
        <>
            <Header isLoggedIn={loggedIn} userType={userType}/>
            <Logo className="div-logo--Top15"/>
            <FormSignUp/>
        </>
    )
}
export default Login