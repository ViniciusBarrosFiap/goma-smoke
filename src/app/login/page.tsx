"use client"
import FormSignUp from "@/components/FormLogin/FormLogin"
import Header from "@/components/Header/Header"
import Logo from "@/components/Logo/page"
import "../../global.scss"
import { useEffect, useState,  } from "react"
import {parseCookies} from 'nookies';
function Login(){
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const cookies = parseCookies()
        const token = cookies.token;
        
        if (token) {
            setLoggedIn(true);
            setLoading(false)

        } else {
            setLoading(false);
        }
    }, [])
    if (loading) {
        return <div>Carregando...</div>;
    }
    return(
        <>
            <Header isLoggedIn={loggedIn}/>
            <Logo className="div-logo--Top15"/>
            <FormSignUp/>
        </>
    )
}
export default Login