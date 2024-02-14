import Link from "next/link";
import InputForm from "../InputForm/InputForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import ButtonProductId from "../Buttons/ButtonProductId";
import "../FormLogin/style.scss"
function FormSignUp() {
    return (
        <>
            <SectionTitle title="Criar conta" />
            <section className="section-main-login">
                <div className="div-form">
                    <form action="" className="formLogin">
                        <div className="div-inputs">
                            <InputForm label="Nome" placeholder="Nome" type="text"/>
                            <InputForm label="Sobrenome" placeholder="Sobrenome" type="text"/>
                            <InputForm label="Telefone" placeholder="Telefone" type="text"/>
                            <InputForm label="Email" placeholder="Email" type="email" />
                            <InputForm label="Senha" placeholder="Senha" type="password" />
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