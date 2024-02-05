interface InputFormProps{
    placeholder: string,
    type: string,
}
function InputForm({placeholder,type} : InputFormProps){
    return(
        <input type={type} placeholder={placeholder}/>
    )
}
export default InputForm;