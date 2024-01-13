"use client";
import Link from "next/link"
import "./style.scss"
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useState } from "react";

function Header(){
    const [cartDisplay, setCartDisplay] = useState("none");

    const toggleCart = () => {
        setCartDisplay((prevDisplay) => (prevDisplay === "block" ? "none" : "block"));
      };
    return (
        <header className="styled-header">
            <div className="div-content">
                <div className="div-options">
                    <ul className="ul-shared">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/produtos"}>Produtos</Link></li>
                        <li><Link href={"/contato"}>Contato</Link></li>
                    </ul>
                </div>

                <div className="div-search">
                    <input type="text" placeholder="Busque um produto"/>
                    <button className="btn-search">
                        <FaSearch />
                    </button>
                </div>

                <div className="div-login">
                    <ul className="ul-shared">
                        <li><Link href={"/login"}>Entrar</Link></li>
                        <li><Link href={"/criar"}>Criar conta</Link></li>
                    </ul>
                    <FaShoppingCart onClick={toggleCart}/>
                </div>
            </div>
            <ShoppingCart display={cartDisplay} onToggleCart={toggleCart}/>
        </header>
    )
}
export default Header