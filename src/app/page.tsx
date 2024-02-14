import Header from "@/components/Header/Header"
import "../global.scss"
import Logo from "@/components/Logo/page";
import DivTitle from "@/components/SectionTitle/SectionTitle";
import SectionProducts from "@/components/SectionProducts/SectionProducts";
import Footer from "@/components/Footer/Footer";

function Home(){

    return (
        <>
            <Header/>
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