import Link from "next/link"
import "./style.scss"
import { FaSearch } from "react-icons/fa";

function Header(){
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
                        <li><Link href={"/entrar"}>Entrar</Link></li>
                        <li><Link href={"/criar"}>Criar conta</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header