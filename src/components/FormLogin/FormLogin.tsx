"use client"
import Link from "next/link";
import ButtonProductId from "../Buttons/ButtonProductId";
import InputForm from "../InputForm/InputForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./style.scss"
function FormLogin(){

    const handleChange : React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        console.log(e.target.value)
    }
    return(
        <>
            <SectionTitle title="Login"/>
            <section className="section-main-login">
                <div className="div-form">
                    <form action="" className="formLogin">
                        <div className="div-inputs">
                            <InputForm label="Email" placeholder="Email" type="email" onChange={handleChange}/>
                            <InputForm label="Senha" placeholder="Senha" type="password" onChange={handleChange}/>
                        </div>
                        <div className="div-optionsLogin">
                            <Link href={"/"}>Esqueci minha senha</Link>
                            <Link className="signup-option" href={"/signup"}>Cadastre-se</Link>
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