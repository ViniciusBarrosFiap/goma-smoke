import "./style.scss";
interface InputFormProps{
    label:string,
    placeholder: string,
    type: string,
    onChange:  React.ChangeEventHandler<HTMLInputElement> 
}
function InputForm({label, placeholder,type, onChange} : InputFormProps){
    return(
        <div className="div-input">
            <label className="labelInput" htmlFor="input">{label}</label>
            <input className="input" name="input" type={type} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}
export default InputForm;