import Image from "next/image"
import logo from "../../img/logo-goma.png"
import "./style.scss"

interface LogoProps{
    className?: string;
}
function Logo({className} : LogoProps){
    return(
        <div className={`div-logo ${className}`}>
            <Image
                src={logo}
                alt="Logotipo Goma"
                width={370}
            />
        </div>
    )
}
export default Logo