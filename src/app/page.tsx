"use client"
import Header from "@/components/Header/Header"
import "../global.scss"
import Logo from "@/components/Logo/page";
import DivTitle from "@/components/SectionTitle/SectionTitle";
import SectionProducts from "@/components/SectionProducts/SectionProducts";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import {parseCookies} from 'nookies';
import { checkToken } from "@/utils/verify-jwt";
function Home(){
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
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
    return (
        <>
            <Header isLoggedIn={loggedIn} userType={userType}/>
            <Logo className="div-logo--Top15"/>
            <DivTitle title="Destaques"/>
            <SectionProducts/>
            <DivTitle title="Produtos"/>
            <SectionProducts/>
            <Footer/>
        </>
    )
}

export default Home