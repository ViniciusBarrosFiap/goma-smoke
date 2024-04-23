"use client"
import FormSignUp from "@/components/FormLogin/FormLogin"
import Header from "@/components/Header/Header"
import Logo from "@/components/Logo/page"
import "../../global.scss"
import { useEffect, useState,  } from "react"
import {parseCookies} from 'nookies';
import { checkToken } from "@/utils/verify-jwt"
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
                setUserType(payload.userType)
            }
            setLoggedIn(true)
        }
        setLoading(false);
    }, [])
    if (loading) {
        return <div>Carregando...</div>;
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