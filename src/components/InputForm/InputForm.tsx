// import "./style.scss";
import { useEffect, useState } from 'react';
import './style.css'
interface InputFormProps{
    label:string,
    type:string,
    name?:string,
    isDisable?: boolean,
    value?: string;
    onBlur:  React.ChangeEventHandler<HTMLInputElement> 
}

function InputForm({label, type, name, onBlur, isDisable, value}: InputFormProps){
    const [isFill, setIsFill] = useState<boolean>(!!value && value !== "");
    useEffect(() => {
        setIsFill(!!value && value !== "");
    }, [value]);
    const handdleChange = (e: any) => {
        setIsFill(!!e.target.value && e.target.value !== "");
    };

    return (
        <div className="input-group">
            <input
                type={type}
                disabled={isDisable}
                required
                name={name}
                value={value}
                autoComplete="off"
                className="input"
                onChange={handdleChange}
                onBlur={onBlur}
            />
            <label className="user-label">{isFill ? "" : label}</label>
        </div>
    );
}
export default InputForm;