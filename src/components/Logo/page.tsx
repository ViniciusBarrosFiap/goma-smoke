import Image from "next/image"
import logo from "../../img/logo-goma.png"
import "./style.scss"
function Logo(){
    return(
        <div className="div-logo">
            <Image
                src={logo}
                alt="Logotipo Goma"
                width={370}
            />
        </div>
    )
}
export default Logo