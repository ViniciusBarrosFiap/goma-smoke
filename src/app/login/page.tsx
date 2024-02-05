import FormSignUp from "@/components/FormLogin/FormLogin"
import Header from "@/components/Header/Header"
import Logo from "@/components/Logo/page"
import "../../global.scss"
function Login(){
    return(
        <>
            <Header/>
            <Logo className="div-logo--Top15"/>
            <FormSignUp/>
        </>
    )
}
export default Login