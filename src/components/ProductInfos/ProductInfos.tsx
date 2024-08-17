import { addCart } from "@/utils/cartUtils"
import Accordion from "../Accordion/Accordion"
import ButtonProductId from "../Buttons/ButtonProductId"
import "./style.scss"
import { useEffect, useState } from "react"
import { getSingleProductFromDb } from "@/utils/productUtils"
import { ProductDB } from "@/Interfaces/IproductDB"
import { Image } from "@/app/[productId]/page"





function ProductInfos({id, name, category, characteristics, description, images, price} : ProductDB) {
    const [product, setProduct] = useState<ProductDB | null>(null)
    useEffect(()=>{
        setProduct({ id, name, category, characteristics, description, images, price })
    }, [id, name, category, characteristics, description, images, price])

    const handleAddCart = () => {
        if (product) {
            addCart(product);
        }
    }
    // const id = window.location.pathname
    // useEffect(() => {
        
    //     if (id){
    //         getSingleProductFromDb(`/products${id}`, setProduct)
    //     }
    // }, [id])
    
    return (
        <div className="div-details">
            <h1 className="h1-name">{name}</h1>

            <div className="division-bar"></div>

            <div className="div-price">
                <h3>R$ {price}</h3>
                <p>12x de 10,00 sem juros</p>
            </div>

            <div className="div-accordions">
                <Accordion title="detalhes do produto" titleForDescription={name} description={description}/>

                <Accordion title="Condições de pagamento" titleForDescription="Métodos de pagamento" description="Pix, cartão de crédito / débito, boleto"/>
                <Accordion title="Tabela de medidas" titleForDescription="Tabela de medidas" description=""/>
            </div>
            <div className="div-btns">
                <ButtonProductId action="Comprar" color="orange" />
                <ButtonProductId action="Adicionar ao carrinho" color="green" onClick={()=>handleAddCart()}/>
            </div>
        </div>
    )
}

export default ProductInfos