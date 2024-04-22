import Link from "next/link";
import "./style.scss"
import { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    action: string,
    color: string,
}
function ButtonProductId({action, color, type, ...props}:ButtonProps){
    return(
        <button className={`button ${color}`} type={type || "button"} {...props}><Link href={"/"}>{action}</Link></button>
    )
}
export default ButtonProductId;