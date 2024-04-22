import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "./style.scss"
import { ProductDB } from "../SectionProducts/SectionProducts";
// interface CardProps {
//     id: string,
//     image: {
//         url: string
//     },
//     name: string,
//     description: string,
//     price: number;
// }
function Card(product: ProductDB) {
    const imageUrl = typeof product.images === 'string' ? product.images : '';
    const imageUrlWithoutParams = imageUrl.split('?')[0];

    return (
        <div className="card-product">
            <Link href={`/${product.id}`}>
                <div className="div-img">
                    <div className="img-inner">
                        <div className="inner-skew">
                            <Image className="img-product" src={imageUrlWithoutParams} alt="" width={300} height={300} />
                        </div>
                    </div>
                </div>
                <div className="div-infos">
                    <h2 className="info-product">{product.name}</h2>
                    <div>
                        <p className="info-product">{product.description}</p>
                        <h2 className="info-product">R$ {product.price}</h2>
                    </div>
                    <button>Comprar</button>
                </div>
            </Link>
        </div>
    )
}
export default Card;