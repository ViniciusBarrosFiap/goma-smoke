import Header from "@/components/Header/Header"
import "../../global.scss"
import Logo from "@/components/Logo/page"
import FormSignUp from "@/components/FormSignUp/FormSignUp"
function Signup(){
    return (
        <>
            <Header/>
            <Logo className="div-logo--Top15"/>
            <FormSignUp/>
        </>
    )
}
export default Signup