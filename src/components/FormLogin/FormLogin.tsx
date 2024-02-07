import Link from "next/link";
import ButtonProductId from "../Buttons/ButtonProductId";
import InputForm from "../InputForm/InputForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./style.scss"
function FormLogin(){
    return(
        <>
            <SectionTitle title="Login"/>
            <section className="section-main-login">
                <div className="div-form">
                    <form action="" className="formLogin">
                        <div className="div-inputs">
                            <InputForm label="Email" placeholder="Email" type="email"/>
                            <InputForm label="Senha" placeholder="Senha" type="password"/>
                        </div>
                        <div className="div-optionsLogin">
                            <Link href={"/"}>Esqueci minha senha</Link>
                            <Link className="signup-option" href={"/"}>Cadastre-se</Link>
                        </div>
                        <div className="div-loginBtn">
                            <ButtonProductId action="Entrar" color="orange"/>
                        </div>
                    </form>
                </div>    
            </section>
        </>
    )
}
export default FormLogin;