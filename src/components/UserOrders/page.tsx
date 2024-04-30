import { useEffect, useState } from "react"
import "../../../_styles.scss"
import "./style.scss"
import http from "@/http";
import { parseCookies } from "nookies";
import RowTableOrder from "../RowTableOrders/page";
interface orderUserProps {
    id: string;
    createdAt: string;
    user: IUserProps;
    status: string;
    amount: number;
}
interface IUserProps{
    name: string;
}
function UserOrders() {
    const [userOrders, setUserOrders] = useState<orderUserProps[]>([]);
    function formatDateTime(dateTimeString: string): string {
        // Converte a string de data e hora para um objeto Date
        const dateTime = new Date(dateTimeString);
        
        // Extrai os componentes da data e hora
        const day = dateTime.getDate().toString().padStart(2, '0');
        const month = (dateTime.getMonth() + 1).toString().padStart(2, '0'); // Os meses começam do zero, então é necessário adicionar 1
        const year = dateTime.getFullYear();
        const hours = dateTime.getHours().toString().padStart(2, '0');
        const minutes = dateTime.getMinutes().toString().padStart(2, '0');
        const seconds = dateTime.getSeconds().toString().padStart(2, '0');
    
        // Formata a data e hora no formato desejado
        const formattedDateTime = `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
    
        return formattedDateTime;
    }
    useEffect(() => {
        const cookies = parseCookies()
        const token = cookies.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        }
        http.get('orders', config)
            .then((res) => {
                console.log(res.data)
                setUserOrders(res.data)
            })
            .catch((erro) => {
                console.log(erro)
            })
    }, [])
    
    return (
        <section className="container-option">
            <div className="container-content">
                <div className="header-orders">
                    <div className="titles">
                        <h3>Código Pedido</h3>
                        <h3>Data</h3>
                        <h3>Destinatário</h3>
                        <h3>Status</h3>
                        <h3>Total (R$)</h3>
                        <h3>Detalhes</h3>
                    </div>
                    <div className="sepator-line"></div>
                    {userOrders.map((order) => (
                        <>
                            <RowTableOrder orderNum={order.id} date={formatDateTime(order.createdAt)} user={order.user ? order.user.name : ''} status={order.status} amount={order.amount}/>
                            <div className="sepator-line"></div>
                        </>
                        
                        
                    ))}
                </div>
            </div>
        </section>
    )
}
export default UserOrders