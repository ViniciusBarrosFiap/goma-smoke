import OptionsMenuAdmin from "../OptionsMenuAdmin/page";
import DashboardIcon from "../../img/statistics-icon-1.svg"
import ProdutosAdminIcon from "../../img/statistics-icon-2.svg"
import PedidosAdminIcon from "../../img/package-icon-3.svg"

import "./style.scss";

function OpcoesAdmin() {
    return (
        <section className="div-options-admin">
            <div className="option-admin-content">
                <OptionsMenuAdmin src={DashboardIcon} href="/dasboard-admin" title="Dashboard"/>
                <OptionsMenuAdmin src={ProdutosAdminIcon} href="/produtos-admin" title="Produtos"/>
                <OptionsMenuAdmin src={PedidosAdminIcon} href="/pedidos-admin" title="Pedidos"/>
            </div>
        </section>
    )
}
export default OpcoesAdmin
