import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "./style.scss"
interface CardProps {
    id: number,
    image: StaticImageData,
    name: string,
    description: string,
    price: number;
}
function Card({ id, image, name, description, price }: CardProps) {
    return (
        <div className="card-product">
            <Link href={`/${id}`}>
                <div className="div-img">
                    <div className="img-inner">
                        <div className="inner-skew">
                            <Image className="img-product" src={image.src} alt="" width={300} height={300} />
                        </div>
                    </div>
                </div>
                <div className="div-infos">
                    <h2 className="info-product">{name}</h2>
                    <div>
                        <p className="info-product">{description}</p>
                        <h2 className="info-product">R$ {price}</h2>
                    </div>
                    <button>Comprar</button>
                </div>
            </Link>
        </div>
    )
}
export default Card;