// import { useState } from "react";
import "./style.scss"
import { IoCloseSharp } from "react-icons/io5";

interface ShoppingCartProps{
    display: string,
    onToggleCart: () => void;
}
function ShoppingCart({display, onToggleCart} : ShoppingCartProps){
    return(
        <section className={`cart ${display} slide-in-right`}>
            <IoCloseSharp onClick={onToggleCart}/>
        </section>
    )
}
export default ShoppingCart;