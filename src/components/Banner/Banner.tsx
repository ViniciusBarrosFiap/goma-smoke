import Image, { StaticImageData } from "next/image";
import "./style.scss"
interface BannerProps {
    link: StaticImageData,
    alt: string,
    width: number,
    height: number;
}
function Banner({link, alt, width, height}: BannerProps) {
    return(
        <section className="sec-imgBanner">
            <Image 
            src={link}
            alt={alt}
            width={width}
            height={height}
            layout="responsive"
            />
        </section>
    )
}
export default Banner