import Image, { StaticImageData } from "next/image";

interface BannerProps {
    link: StaticImageData,
    alt: string,
    width: number,
    height: number;
}
function Banner({link, alt, width, height}: BannerProps) {
    return(
        <Image 
        src={link}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
        />
    )
}
export default Banner