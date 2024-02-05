import Accordion from "../Accordion/Accordion"
import ButtonProductId from "../Buttons/ButtonProductId"
import "./style.scss"
function ProductInfos() {

    return (
        <div className="div-details">
            <h1 className="h1-name">Kit momento puff clássico - preto </h1>

            <div className="division-bar"></div>

            <div className="div-price">
                <h3>R$ 20,50</h3>
                <p>12x de 10,00 sem juros</p>
            </div>

            <div className="div-accordions">
                <Accordion title="detalhes do produto" titleForDescription='Kit momento puff clássico - preto' description="Kit Momento Puff - Tudo para o seu momento Puff Nosso Kit final conta com:

Case Puff Life exclusiva da cor de sua preferência
Bag Zip Puff
Adesivo Exclusivo
Isqueiro Bic Mini Exclusivo Puff*
Triturador Puff Life
1 Piteira Puff Life
1 Seda Bem Bolado Premium (32 folhas)
* A cor do isqueiro é sortida

O Case Puff foi projetado exatamente para suprir a necessidade e o conforto de fumantes, nele existe um espaço reservado para armazenar cada acessório. Seu objetivo é substituir algo que está sendo improvisado nessa situação, como pequenas caixas e necessaries.

Produzida em EVA, buscando o maior conforto possível e durabilidade do material. Além de conter a exclusiva bag prateada que impede ainda mais que odores se propaguem e aprimora a conservação da erva.

O tamanho também é perfeito, tendo 5cm de altura, 16cm de comprimento e 11cm de largura. Aqui você pode levar até vidro, que a Case Puff resiste a impactos e vai manter tudo seguro lá dentro. Ela também é resistente a água e a odor. Foi feita para estar com você em todos os momentos."/>

                <Accordion title="Condições de pagamento" titleForDescription="Métodos de pagamento" description="Pix, cartão de crédito / débito, boleto"/>
                <Accordion title="Tabela de medidas" titleForDescription="Tabela de medidas" description=""/>
            </div>
            <div className="div-btns">
                <ButtonProductId action="Comprar" color="orange" />
                <ButtonProductId action="Adicionar ao carrinho" color="green" />
            </div>
        </div>
    )
}

export default ProductInfos