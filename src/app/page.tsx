"use client"
import Header from "@/components/Header/Header"
import "../global.scss"
import Logo from "@/components/Logo/page";
import DivTitle from "@/components/SectionTitle/SectionTitle";
import SectionProducts from "@/components/SectionProducts/SectionProducts";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import {parseCookies} from 'nookies';
function Home(){
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
    return (
        <>
            <Header isLoggedIn={loggedIn}/>
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