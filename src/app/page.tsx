import Header from "@/components/Header/Header"
import Head from 'next/head';
import "../global.scss"
import Banner from "@/components/Banner/Banner";
import imgBanner from "../img/Capa-GomaSkome.jpg"
function Home(){

    return (
        <>
            {/* <Head>
                <title>Home</title>
            </Head> */}
            <Header/>
            <Banner link={imgBanner} alt="Banner" width={100} height={100}/>
        </>
    )
}

export default Home