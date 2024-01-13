import Header from "@/components/Header/Header"
import "../global.scss"
import Banner from "@/components/Banner/Banner";
import imgBanner from "../img/Capa-GomaSkome.jpg"
import Logo from "@/components/Logo/page";
import DivTitle from "@/components/SectionTitle/SectionTitle";
import SectionProducts from "@/components/SectionProducts/SectionProducts";
import Footer from "@/components/Footer/Footer";
function Home(){

    return (
        <>
            <Header/>
            <Banner link={imgBanner} alt="Banner" width={100} height={100}/>
            <Logo/>
            <DivTitle title="Destaques"/>
            <SectionProducts/>
            <DivTitle title="Produtos"/>
            <SectionProducts/>
            <Footer/>
        </>
    )
}

export default Home