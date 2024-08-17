import "../../../_styles.scss"
import ButtonProductId from "../Buttons/ButtonProductId";
function ProductsAdmin() {
    return(
        <section className="container-option">
            <div className="container-content">
                <ButtonProductId action="+ Adicionar Produto" color="orange"/>
            </div>
        </section>
    )
}
export default ProductsAdmin;