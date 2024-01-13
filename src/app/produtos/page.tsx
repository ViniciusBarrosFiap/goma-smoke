import Header from "@/components/Header/Header"
import SectionTitle from "@/components/SectionTitle/SectionTitle"
import "../../global.scss"
import SectionProducts from "@/components/SectionProducts/SectionProducts"
import Footer from "@/components/Footer/Footer"
import Banner from "@/components/Banner/Banner"
import logoBanner from "../../img/Banner-logo.png"
function Produtos(){
    return (
        <>
            <Header/>
            <Banner link={logoBanner} alt="Logo goma" width={100} height={100}/>
            <SectionTitle title="Todos nossos produtos"/>
            <SectionProducts />
            <Footer/>
        </>
    )
}
export default Produtos