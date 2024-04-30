"use client"
import Header from "@/components/Header/Header";
import { checkToken } from "@/utils/verify-jwt";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import "../../global.scss"
import Logo from "@/components/Logo/page";
import DivTitle from "@/components/SectionTitle/SectionTitle";
import OptionsMenuLogged from "@/components/OptionsMenuAdmin/page";
import PedidosUserIcon from "../../img/package-icon-3.svg"
import userIcon from '../../img/userIcon.svg'
import './style.scss'
import NotFound from "@/components/NotFound/page";
import UserOrders from "@/components/UserOrders/page";
import Loader from "@/components/Loader/page";
function Conta() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [userType, setUserType] = useState(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [pageSelect, setPageSelect] = useState("Pedidos");

    useEffect(() => {
        const cookies = parseCookies()
        const token = cookies.token;

        if (token) {
            const payload = checkToken(token);
            if (payload && typeof payload === 'object' && 'userType' in payload) {
                setUserType(payload.userType)
            }
            setLoggedIn(true)
        }
        setLoading(false);
    }, [])
    if (loading) {
        return <Loader/>;
    }
    const handlerPageSelect = (page: string) => {
        setPageSelect(page);
    }
    let componentToRender;
    switch (pageSelect) {
        case "Pedidos":
            componentToRender = <UserOrders/>
        case "Meus dados":
            // componentToRender = 
            break
    }

    return (
        loggedIn && userType == 'user' ? (
            <>
                <Header isLoggedIn={loggedIn} userType={userType} />
                <Logo className='div-logo div-logo--Top15' />
                <DivTitle title="Conta" />
                <section className="div-options-user">
                    <div className="option-user-content">
                        <OptionsMenuLogged src={PedidosUserIcon} onClick={() => handlerPageSelect("Pedidos")} title="Pedidos" />
                        <OptionsMenuLogged src={userIcon} onClick={() => handlerPageSelect("Meus dados")} title="Meus dados" />
                    </div>
                </section>
                <DivTitle title={pageSelect} />
                {componentToRender}
            </>

        ) :
            (
                <NotFound/>
            ))
    }
export default Conta