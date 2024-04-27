import Image from "next/image";
import Logo from "../Logo/page";
import "./style.scss";
import NotFoundIcon from '../../img/notfound.svg'
function NotFound() {
    return (
        <div className="not-found-content">
            <div>
                <Logo className="div-logo--Top15"/>
            </div>
            <h1>Página não encontrada</h1>
            <div className="div-img-not-found swing-in-top-bck">
                <Image src={NotFoundIcon} alt="" height={500} width={500}/>
            </div>
        </div>
    )
}
export default NotFound