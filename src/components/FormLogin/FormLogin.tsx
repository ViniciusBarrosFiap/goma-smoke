import InputForm from "../InputForm/InputForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./style.scss"
function FormLogin(){
    return(
        <>
            <SectionTitle title="Login"/>
            <form action="" className="formLogin">
                <div className="div-inputs">
                    <InputForm placeholder="Email" type="email"/>
                    <InputForm placeholder="Password" type="password"/>
                </div>
            </form>
        </>
    )
}
export default FormLogin;