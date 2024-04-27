import { useEffect, useState } from "react"
import "../../../_styles.scss"
import "./style.scss"
import http from "@/http";
import { parseCookies } from "nookies";
function UserOrders() {
    const [userOrders, setUserOrders] = useState(null);
    useEffect(() => {
        const cookies = parseCookies()
        const token = cookies.token;
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        }
        http.get('orders', config)
            .then((res) => {
                console.log(res)
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
                    <div className="div-rows">
                        <div className="rows-order-table">
                            <h4>#001</h4>
                            <h4>27/04/2024 - PM12:00:00</h4>
                            <h4>Vinicius Oliveira de Barros</h4>
                            <h4>Pendente</h4>
                            <h4>R$ 150,00</h4>
                            <h4>Ver mais</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default UserOrders