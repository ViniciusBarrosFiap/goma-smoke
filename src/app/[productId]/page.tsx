"use client"
import Header from "@/components/Header/Header";
import Logo from "@/components/Logo/page";
import "../../global.scss"
import ProductInfos from "@/components/ProductInfos/ProductInfos";
import styled from "styled-components";
import Carrossel from "@/components/Carrossel/Carrossel";
import "./style.scss"
import MultipleItems from "@/components/SlikCarrossel/SlikCarrossel";
import Footer from "@/components/Footer/Footer";
import {parseCookies} from 'nookies';
import { useEffect, useState } from "react";
import { checkToken } from "@/utils/verify-jwt";
import Loader from "@/components/Loader/page";
const SecLogo = styled.section`
    height:35vh;
`
function ProductDetails(){
    const images = ["https://pufflife.fbitsstatic.net/img/p/kit-momento-puff-classico-preto-70190/256845-1.jpg?w=1500&h=1500&v=no-change&qs=ignore","https://kirramotors-upload-bucket.s3.us-east-2.amazonaws.com/WhatsApp%20Image%202023-08-25%20at%2014.47.37.jpeg"]
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
        return <Loader/>;
    }
    return(
        <>
            <Header isLoggedIn={loggedIn} userType={userType}/>
            <SecLogo>
                <Logo className="div-logo--Top15"/>
            </SecLogo>

            <section className="container">
                <div className="div-about">
                    <Carrossel images={images}/>
                    <ProductInfos />
                </div>
            </section>
            <section className="section-carrossel">
                <div className="div-slik">
                    <MultipleItems/>
                </div>
            </section>
            <Footer/>
            
        </>
    )
}
export default ProductDetails;