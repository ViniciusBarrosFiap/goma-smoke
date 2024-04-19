import "./style.scss"
import Link from "next/link"
import { FaHome, FaList } from "react-icons/fa";
import { BsTelephonePlusFill } from "react-icons/bs";





import { IoCloseSharp } from "react-icons/io5";
import Logo from "../Logo/page";
interface MenuMobileProps{
    display: string;
    onToggleMenu: () => void;
}
function MenuMobile({display, onToggleMenu}:MenuMobileProps){
    return(
        <aside className={`menu ${display} slide-in-left`}>
            <div className="div-btnClose">
                <IoCloseSharp className="btn-close" onClick={onToggleMenu}/>
            </div>
            <section className="sec-menuMobile">
                <div>
                    <Logo className="div-logo--Mobile"/>
                </div>
                <div className="div-optionsMenu">
                    <div className="div-options">
                        <ul className="options-menuMobile">
                            <li><FaHome className="svg-options"/><Link href={"/"}>Home</Link></li>
                            <div className="separate-line"></div>
                            <li><FaList className="svg-options"/><Link href={"/produtos"}>Produtos</Link></li>
                            <div className="separate-line"></div>
                            <li><BsTelephonePlusFill className="svg-options"/><Link href={"/contato"}>Contato</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        </aside>
    )
}
export default MenuMobile