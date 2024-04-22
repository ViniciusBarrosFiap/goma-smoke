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
                            <InputForm label="Nome"  type="text" onChange={handleChange}/>
                            <InputForm label="Email"  type="email" onChange={handleChange}/>
                            <InputForm label="Senha"  type="password" onChange={handleChange}/>
                            <InputForm label="CPF"  type="text" onChange={handleChange}/>
                            <InputForm label="Telefone" type="text" onChange={handleChange}/>
                            <InputForm label="Data de nascimento" type="text" onChange={handleChange}/>
                        </div>
                        <div className="div-optionsLogin">
                            <Link href={"/login"}>Fazer login</Link>
                        </div>
                        <div className="div-loginBtn">
                            <ButtonProductId action="Criar conta" color="green" type="submit"/>
                        </div>

                    </form>
                </div>
            </section>

        </>
    )
}
export default FormSignUp;