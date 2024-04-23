"use client"
import Header from "@/components/Header/Header"
import SectionTitle from "@/components/SectionTitle/SectionTitle"
import "../../global.scss"
import SectionProducts from "@/components/SectionProducts/SectionProducts"
import Footer from "@/components/Footer/Footer"
import Logo from "@/components/Logo/page"
import {parseCookies} from 'nookies';
import { useEffect, useState } from "react"
import { checkToken } from "@/utils/verify-jwt"

function Produtos(){
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
            <Logo/>
            <SectionTitle title="Todos nossos produtos"/>
            <SectionProducts />
            <Footer/>
        </>
    )
}
export default Produtos