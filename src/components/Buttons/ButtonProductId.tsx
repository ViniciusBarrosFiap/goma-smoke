import Link from "next/link";
import "./style.scss"
import { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    action: string,
    color: string,
    margin?: string,
}
function ButtonProductId({action, color, type, onClick, margin, ...props}:ButtonProps){
    return(
        <button className={`button ${color} ${margin}`} onClick={onClick} type={type || "button"} {...props}><Link href={"/"}>{action}</Link></button>
    )
}
export default ButtonProductId;