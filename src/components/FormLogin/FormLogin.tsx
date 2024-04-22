"use client"
import Link from "next/link";
import ButtonProductId from "../Buttons/ButtonProductId";
import InputForm from "../InputForm/InputForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import http from "../../http/index";
import "./style.scss"
import { useState } from "react";

function FormLogin(){
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [token, setToken] = useState<string>('')
    const handleChange = (e: any) =>{
        const target = e.target as HTMLInputElement;
        const {type, value} = target;
        if(type === 'email') {
            setEmail(value)
        }
        else if (type === 'password'){
            setPassword(value)
        }
    }
    const signIn = () => {
        const credentials = {
            "email": email,
            "password": password
        }
        http.post('authentication/login', credentials)
        .then(response => {
            setToken(response.data.access_token)
            if(response.status == 201) {
                return (
                    <h1>Login feito com sucesso</h1>
                )
            }
        })
        .catch((error) => {
            return (
                <h1>Erro ao realizar o login</h1>
            )
        })
    }
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
                            <ButtonProductId action="Entrar" onClick={()=>signIn()} color="orange"/>
                        </div>
                    </form>
                </div>    
            </section>
        </>
    )
}
export default FormLogin;