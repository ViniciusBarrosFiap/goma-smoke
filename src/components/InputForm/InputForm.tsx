// import "./style.scss";
import { useState } from 'react';
import './style.css'
interface InputFormProps{
    label:string,
    type:string,
    name?:string
    onBlur:  React.ChangeEventHandler<HTMLInputElement> 
}

function InputForm({label, type, name, onBlur}: InputFormProps){
    const [isFill, setIsFill] = useState<boolean>(false)
    const handdleChange = (e:any) => {
        if (e.target.value !== "") {
            setIsFill(true)
        }else{
            setIsFill(false)
        }
    }
    return(
        <div className="input-group">
            <input type={type} required name={name} autoComplete="off" className="input" onChange={handdleChange} onBlur={onBlur}/>
            <label className="user-label">{isFill ? "" : label}</label>
        </div>
    )
}
export default InputForm;