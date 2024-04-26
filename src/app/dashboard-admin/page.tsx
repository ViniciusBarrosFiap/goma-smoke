"use client"
import Header from '@/components/Header/Header';
import '../../global.scss';
import { useEffect, useState } from 'react';
import { checkToken } from '@/utils/verify-jwt';
import { parseCookies } from 'nookies';
import Logo from '@/components/Logo/page';
import DivTitle from "@/components/SectionTitle/SectionTitle";
import OpcoesAdmin from '@/components/OpcoesAdmin/page';
function Dashboard() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [userType, setUserType] = useState(null)
    const [loading, setLoading] = useState<boolean>(true)

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
        return <div>Carregando...</div>;
    }
    return (
        <>
            <Header isLoggedIn={loggedIn} userType={userType}/>
            <Logo className='div-logo div-logo--Top15'/>
            <DivTitle title="Menu"/>
            <OpcoesAdmin/>
            <DivTitle title="Dashboard de vendas"/>
        </>
    )
}
export default Dashboard