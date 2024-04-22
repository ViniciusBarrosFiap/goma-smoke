import Link from "next/link";
import "./style.scss"
import { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    action: string,
    color: string,
}
function ButtonProductId({action, color, type, onClick, ...props}:ButtonProps){
    return(
        <button className={`button ${color}`} onClick={onClick} type={type || "button"} {...props}><Link href={"/"}>{action}</Link></button>
    )
}
export default ButtonProductId;