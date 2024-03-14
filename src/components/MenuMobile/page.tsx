import "./style.scss"
import { IoCloseSharp } from "react-icons/io5";
interface MenuMobileProps{
    display: string;
    onToggleMenu: () => void;
}
function MenuMobile({display, onToggleMenu}:MenuMobileProps){
    return(
        <section className={`menu ${display} slide-in-left`}>
            <IoCloseSharp onClick={onToggleMenu}/>
        </section>
    )
}
export default MenuMobile