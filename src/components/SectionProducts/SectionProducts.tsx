import produto from "../../img/casePuff.png"
import Card from "../Card/Card"
import "./style.scss"
function SectionProducts(){
    const products = [
        {
            id:1,
            image: produto,
            name:"Product 1",
            description:"This is product one.",
            price:20.50
        },
        {
            id:2,
            image: produto,
            name:"Product 2",
            description:"This is product one.",
            price:20.50
        },
        {
            id:3,
            image: produto,
            name:"Product 3",
            description:"This is product one.",
            price:20.50
        },
        {
            id:4,
            image: produto,
            name:"Product 4",
            description:"This is product one.",
            price:20.50
        },
        {
            id:4,
            image: produto,
            name:"Product 4",
            description:"This is product one.",
            price:20.50
        },
        {
            id:4,
            image: produto,
            name:"Product 4",
            description:"This is product one.",
            price:20.50
        },
        {
            id:4,
            image: produto,
            name:"Product 4",
            description:"This is product one.",
            price:20.50
        },
        {
            id:4,
            image: produto,
            name:"Product 4",
            description:"This is product one.",
            price:20.50
        },

    ]
    return(
        <section className="section-products">
            <div className="div-products">
                {products.map(({id, image, name, description, price}, index) =>(
                    <Card 
                    key={index} 
                    id={id} 
                    image={image} 
                    name={name} 
                    description={description} 
                    price={price}/>
                ))}
            </div>
        </section>
    )
}
export default SectionProducts