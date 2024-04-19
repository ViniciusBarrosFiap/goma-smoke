"use client"
import Link from "next/link";
import InputForm from "../InputForm/InputForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import ButtonProductId from "../Buttons/ButtonProductId";
import "../FormLogin/style.scss"
function FormSignUp() {
    const handleChange = (e: any) => {
        console.log(e.target.value)
    }
    return (
        <>
            <SectionTitle title="Criar conta" />
            <section className="section-main-login">
                <div className="div-form">
                    <form action="" className="formLogin">
                        <div className="div-inputs">
                            <InputForm label="Nome" placeholder="Nome" type="text" onChange={handleChange}/>
                            <InputForm label="Email" placeholder="Email" type="email" onChange={handleChange}/>
                            <InputForm label="Senha" placeholder="Senha" type="password" onChange={handleChange}/>
                            <InputForm label="CPF" placeholder="Digite seu CPF" type="text" onChange={handleChange}/>
                            <InputForm label="Telefone" placeholder="Telefone" type="text" onChange={handleChange}/>
                            <InputForm label="" placeholder="Telefone" type="text" onChange={handleChange}/>
                        </div>
                        <div className="div-optionsLogin">
                            <Link href={"/login"}>Fazer login</Link>
                        </div>
                        <div className="div-loginBtn">
                            <ButtonProductId action="Criar conta" color="green" />
                        </div>

                    </form>
                </div>
            </section>

        </>
    )
}
export default FormSignUp;