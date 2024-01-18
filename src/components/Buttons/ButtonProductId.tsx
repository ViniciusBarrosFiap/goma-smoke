import Link from "next/link";
import "./style.scss"
interface ButtonProps{
    action: string,
    color: string
}
function ButtonProductId({action, color}:ButtonProps){
    return(
        <button className={`button ${color}`} type="button"><Link href={"/"}>{action}</Link></button>
    )
}
export default ButtonProductId;