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
import { ProductDB } from "@/Interfaces/IproductDB";
import { getSingleProductFromDb } from "@/utils/productUtils";



const SecLogo = styled.section`
    height:35vh;
`
export interface Image {
    url: string;
    alt?: string;
}
function ProductDetails(){
    // const images = ["https://pufflife.fbitsstatic.net/img/p/kit-momento-puff-classico-preto-70190/256845-1.jpg?w=1500&h=1500&v=no-change&qs=ignore","https://kirramotors-upload-bucket.s3.us-east-2.amazonaws.com/WhatsApp%20Image%202023-08-25%20at%2014.47.37.jpeg"]
    const [product, setProduct] = useState<ProductDB | undefined>(undefined);
    const [images, setImages] = useState<string[]>([]);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [userType, setUserType] = useState(null);

    useEffect(() => {
        // Este código será executado apenas no lado do cliente
        const pathname = window.location.pathname;
        const productId = pathname.split('/').pop(); // Extrai o ID do caminho

        // Verifica se productId está presente antes de fazer a solicitação
        if (productId) {
            getSingleProductFromDb(`/products${pathname}`, (data: ProductDB | undefined) => {
                if (data) {
                    setProduct(data);
                    setImages(data.images.map((image: Image) => image.url));
                }
                setLoading(false);
            });
        }
    }, []); 

    useEffect(() => {
        const cookies = parseCookies();
        const token = cookies.token;

        if (token) {
            const payload = checkToken(token);
            if (payload && typeof payload === 'object' && 'userType' in payload) {
                setUserType(payload.userType);
            }
            setLoggedIn(true);
        }
    }, []); 

    console.log(product)

    if (loading || !product) {
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
                    <ProductInfos 
                        id={product.id} 
                        name={product.name} 
                        category={product.category} 
                        characteristics={product.characteristics} 
                        description={product.description} 
                        images={product.images} 
                        price={product.price}/>
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