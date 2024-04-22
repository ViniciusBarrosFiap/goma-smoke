"use client"
// import produto from "../../img/casePuff.png"
import Card from "../Card/Card"
import "./style.scss"
import  http  from '../../http/index'
import { useEffect, useState } from "react"
export interface ProductDB {
    id: string
    name: string
    description: string
    price: number
    images: {
        url: string
        alt?: string
    }
}
function SectionProducts(){
    const [products, setProducts] = useState([])
    const getProductFromDb = (url: string) => {
        http.get(url)
        .then((response): void => {
            setProducts(response.data)
        })
        .catch((error): void => {
            console.log("Erro ao recuperar produtos do DB", error)
        })
    }
    useEffect(() => {
        getProductFromDb("/products")
    }, [])
    return(
        <section className="section-products">
            <div className="div-products">
                {products.map((product: ProductDB, index) => (
                    <Card 
                        key={index} 
                        id={product.id} 
                        images={Array.isArray(product.images) && product.images.length > 0 ? product.images[0].url : ''}
                        name={product.name} 
                        description={product.description} 
                        price={product.price}
                    />
                ))}
            </div>
        </section>
    )
}
export default SectionProducts