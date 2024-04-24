"use client"
import Link from "next/link";
import ButtonProductId from "../Buttons/ButtonProductId";
import InputForm from "../InputForm/InputForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import http from "../../http/index";
import "./style.scss"
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { useEffect, useState } from "react";
import { checkToken } from "@/utils/verify-jwt";

function FormLogin(){
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("")
    
    useEffect(() => {
        const cookies = parseCookies();
        const token = cookies.token;
        checkToken(token)
        if (token) {
           setLoggedIn(true);
           setLoading(false)
        } else {
            setLoading(false);
        }
    }, []);
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
            if(response.status == 201) {
                const token = response.data.access_token
                setCookie(null, 'token', token, {
                    maxAge: 3600,
                    path: '/'
                })
            }
            setLoggedIn(true);
            window.location.href = '/conta';
        })
        .catch((error) => {
            setError(error.response.data.message)
        })
    }
    const handdleLogout = () => {
        destroyCookie(null, 'token')
        setLoggedIn(false);
    }

    if (loading) {
        return <div>Carregando...</div>;
    }
    if (loggedIn) {
        return (
            <>
                <p>Você está logado</p>
                <button onClick={handdleLogout}></button>
            </>
        )
    }
    return(
        <>
            <SectionTitle title="Login"/>
            <section className="section-main-login">
                <div className="div-form">
                    <form action="" className="formLogin">
                        {error != "" ? (
                            <div>
                                <p style={{color:"red"}}>{error}</p>
                            </div>
                        ): ""}
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