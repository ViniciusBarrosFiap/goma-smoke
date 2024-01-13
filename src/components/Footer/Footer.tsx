import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import "./style.scss"

import Logo from "../../img/logo-goma.png"
function Footer() {
    return (
        <footer className="footer">
            <section className="section-footer">
                <div className="div-imgFooter">
                    <Image src={Logo} alt="Logo footer" width={250} height={150} />
                </div>
                <div className="div-infos">
                    <h2 className="h2-footer">Informações</h2>
                    <ul className="ul-infos">
                        <li><CiLocationOn /> <p>Rua Jundiaí, 83 - Vila Thereza - Vinhedo - SP, 13280-071</p></li>
                        <li><BsTelephone /> <p>(19) 99636-0420</p></li>
                        <li><MdOutlineEmail /> <p>goma.smoke.shop@gmail.com</p></li>
                    </ul>
                </div>
                
            </section>
        </footer>
    )
}
export default Footer