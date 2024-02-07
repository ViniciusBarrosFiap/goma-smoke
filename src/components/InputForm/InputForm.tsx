import "./style.scss";
interface InputFormProps{
    label:string,
    placeholder: string,
    type: string,
}
function InputForm({label, placeholder,type} : InputFormProps){
    return(
        <div className="div-input">
            <label className="labelInput" htmlFor="input">{label}</label>
            <input className="input" name="input" type={type} placeholder={placeholder}/>
        </div>
    )
}
export default InputForm;