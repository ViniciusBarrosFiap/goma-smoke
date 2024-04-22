"use client"
import Link from "next/link";
import ButtonProductId from "../Buttons/ButtonProductId";
import InputForm from "../InputForm/InputForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./style.scss"
import { useEffect, useState } from "react";
function FormLogin(){
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const handleChange = (e: any) =>{
        const target = e.target as HTMLInputElement;
        console.log(target)
        const {name, value} = target;
        if(name === 'email') {
            console.log("dentro da func:",value)
            setEmail(value)
        }
        else if (name === 'password'){
            setPassword(value)
        }

    }
    useEffect(() => {
        console.log('Email:', email)
        console.log("senha", password)
    },[email, password])
    return(
        <>
            <SectionTitle title="Login"/>
            <section className="section-main-login">
                <div className="div-form">
                    <form action="" className="formLogin">
                        <div className="div-inputs">
                            <InputForm label="Email"  type="email" onBlur={handleChange}/>
                            <InputForm label="Senha"  type="password" onBlur={handleChange}/>
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