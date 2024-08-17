// import { useState } from "react";
import { useEffect, useState } from "react";
import "./style.scss"
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import ButtonProductId from "../Buttons/ButtonProductId";

interface ShoppingCartProps{
    display: string;
    onToggleCart: () => void;
}   

interface CartItem {
    id: string;
    images: string;
    name: string;
    price: number;
    quantity: number;
}
function ShoppingCart({display, onToggleCart} : ShoppingCartProps){
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const removeItem = (id: string) => {
        const updateCart = cartItems.filter(item => item.id !== id);
        setCartItems(updateCart);
        localStorage.setItem("cart", JSON.stringify(updateCart));
    }
    useEffect(()=> {
        const localCart = localStorage.getItem("cart");
        if(localCart){
            setCartItems(JSON.parse(localCart));
        }
    }, [])
    return(
        <section className={`cart ${display} slide-in-right`}>
            <IoCloseSharp className="close-cart" onClick={onToggleCart}/>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <Link href={item.id}>
                            <img src={item.images} alt="foto item" />
                            <div className="div-itemsCart">
                                <h4>{item.name}</h4>
                                <div className="info-items">
                                    <p>Preço: R$ {item.price}</p>
                                    <p>Quant: {item.quantity}</p>
                                </div>
                            </div>
                            <IoMdClose
                                className="remove-icon"
                                onClick={()=>removeItem(item.id)}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="cart-buttons">
                <button className="continue-shopping" onClick={onToggleCart}>Continuar comprando</button>
                <button className="checkout">Finalizar compra</button>
                

            </div>
        </section>
    )
}
export default ShoppingCart;