// import "./style.scss";
import './style.css'
interface InputFormProps{
    label:string,
    type:string,
    onBlur:  React.ChangeEventHandler<HTMLInputElement> 
}
function InputForm({label, type, onBlur}: InputFormProps){
    return(
        <div className="input-group">
            <input type={type} required name="text" autoComplete="off" className="input"  onBlur={onBlur}/>
            <label className="user-label">{label}</label>
        </div>
    )
}
export default InputForm;