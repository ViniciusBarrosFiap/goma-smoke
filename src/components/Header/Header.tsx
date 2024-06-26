"use client";
import Link from "next/link"
import "./style.scss"
import { FaBars, FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useState } from "react";
import MenuMobile from "../MenuMobile/page";
import { destroyCookie } from "nookies";

interface HeaderProps {
    isLoggedIn: boolean;
    userType: string | null;
}

function Header({isLoggedIn, userType}: HeaderProps){
    const [cartDisplay, setCartDisplay] = useState("none");
    const [menuMobile, setMenuMobile] = useState("none")
    const toggleCart = () => {
        setCartDisplay((prevDisplay) => (prevDisplay === "block" ? "none" : "block"));
      };
    const toggleMenu = () =>{
        setMenuMobile((prevDisplay) => (prevDisplay === "block" ? "none" : "block"));
    }
    const handdleLogout = () => {
        destroyCookie(null, 'token')
    }
    return (
        <header className="styled-header">
            <MenuMobile display={menuMobile} onToggleMenu={toggleMenu}/> 
            <div className="div-content">
                <div className="menu-mobile">
                    <FaBars onClick={()=>toggleMenu()} />
                </div>
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
                {isLoggedIn ? (
                    <ul className="ul-shared">
                        {userType === 'admin' && (
                        <>
                            <li><Link href={"/dashboard-admin"}>Dashboard</Link></li>
                            <li><Link href={"/"} onClick={handdleLogout}>Sair</Link></li>
                        </>
                        )}
                        {userType !== 'admin' && (
                        <>
                            <li><Link href={"/conta"}>conta</Link></li>
                            <li><Link href={"/conta"}>pedidos</Link></li>
                        </>
                        )}
                    </ul>
                    ) : (
                    <ul className="ul-shared">
                        <li><Link href={"/login"}>Entrar</Link></li>
                        <li><Link href={"/signup"}>Criar conta</Link></li>
                    </ul>
                    )}
                </div>

                <div className="div-cart">
                    <FaShoppingCart onClick={toggleCart}/>
                </div>
            </div>
            <ShoppingCart display={cartDisplay} onToggleCart={toggleCart}/>
        </header>
    )
}
export default Header