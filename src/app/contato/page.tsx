"use client"
import Header from "@/components/Header/Header";
import Logo from "@/components/Logo/page";
import "../../global.scss"
import {parseCookies} from 'nookies';
import { useEffect, useState } from "react";

function Contato(){
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
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
        </>
    )
}
export default Contato;