import { useEffect, useState } from "react"
import "../../../_styles.scss"
import "./style.scss"
import http from "@/http";
import { parseCookies } from "nookies";
import RowTableOrder from "../RowTableOrders/page";
function UserOrders() {
    const [userOrders, setUserOrders] = useState([]);
    useEffect(() => {
        const cookies = parseCookies()
        const token = cookies.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        }
        http.get('orders', config)
            .then((res) => {
                // console.log(res.data)
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
                        <h3>Pedido N°#</h3>
                        <h3>Data</h3>
                        <h3>Destinatário</h3>
                        <h3>Status</h3>
                        <h3>Total (R$)</h3>
                        <h3>Detalhes</h3>
                    </div>
                    <div className="sepator-line"></div>
                    {userOrders.map(({id, amount, createdAt, status, user.name}) => (
                        <RowTableOrder orderNum={id}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default UserOrders