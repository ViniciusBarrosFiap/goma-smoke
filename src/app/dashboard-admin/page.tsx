"use client"
import Header from '@/components/Header/Header';
import '../../global.scss';
import "./style.scss";
import { useEffect, useState } from 'react';
import { checkToken } from '@/utils/verify-jwt';
import { parseCookies } from 'nookies';
import Logo from '@/components/Logo/page';
import DivTitle from "@/components/SectionTitle/SectionTitle";
import OptionsMenuLogged from '@/components/OptionsMenuAdmin/page';
import DashboardIcon from "../../img/statistics-icon-1.svg"
import ProdutosAdminIcon from "../../img/statistics-icon-2.svg"
import PedidosAdminIcon from "../../img/package-icon-3.svg"
import DashboardAdmin from '@/components/DashboardAdmin/page';
import ProductsAdmin from '@/components/ProductsAdmin/page';
import OrdersAdmin from '@/components/OrdersAdmin/page';
import NotFound from '@/components/NotFound/page';
import Loader from '@/components/Loader/page';
function Dashboard() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const [userType, setUserType] = useState(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [pageSelect, setPageSelect] = useState("Dashboard");
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
        case "Dashboard":
            componentToRender = <DashboardAdmin />
            break
        case "Produtos":
            componentToRender = <ProductsAdmin />
            break
        case "Pedidos":
            componentToRender = <OrdersAdmin />
    }


    return (
        loggedIn && userType == 'admin' ? (
            <>
                <Header isLoggedIn={loggedIn} userType={userType} />
                <Logo className='div-logo div-logo--Top15' />
                <DivTitle title="Menu" />
                <section className="div-options-admin">
                    <div className="option-admin-content">
                        <OptionsMenuLogged src={DashboardIcon} onClick={() => handlerPageSelect("Dashboard")} title="Dashboard" />
                        <OptionsMenuLogged src={ProdutosAdminIcon} onClick={() => handlerPageSelect("Produtos")} title="Produtos" />
                        <OptionsMenuLogged src={PedidosAdminIcon} onClick={() => handlerPageSelect("Pedidos")} title="Pedidos" />
                    </div>
                </section>
                <DivTitle title={pageSelect} />
                {componentToRender}
            </>

        ) :
            (
                <NotFound />
            ))
}
export default Dashboard