"use client"
// import produto from "../../img/casePuff.png"
import Card from "../Card/Card"
import "./style.scss"
import { useEffect, useState } from "react"
import { ProductDB } from "@/Interfaces/IproductDB"
import { getProductFromDb } from "@/utils/productUtils"

function SectionProducts(){
    const [products, setProducts] = useState<ProductDB[]>([])
    useEffect(() => {
        getProductFromDb("/products", setProducts)
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