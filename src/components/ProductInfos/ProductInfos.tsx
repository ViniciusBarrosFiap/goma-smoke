import Accordion from "../Accordion/Accordion"
import ButtonProductId from "../Buttons/ButtonProductId"
import "./style.scss"
function ProductInfos(){
    
    return (
       <div className="div-details">
            <h1 className="h1-name">Kit momento puff clássico - preto </h1>

            <div className="division-bar"></div>

            <div className="div-price">
                <h3>R$ 20,50</h3>
                <p>12x de 10,00 sem juros</p>
            </div>

            <div className="div-accordions">
                <Accordion title="Detalhes do produto" />
                <Accordion title="Condições de pagamento" />
                <Accordion title="Tabela de medidas"/>
            </div>
            <div className="div-btns">
                <ButtonProductId action="Comprar" color="orange"/>
                <ButtonProductId action="Adicionar ao carrinho" color="green"/>
            </div>
       </div>
    )
}

export default ProductInfos