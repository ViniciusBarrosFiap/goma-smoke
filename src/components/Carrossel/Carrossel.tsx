import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import "./style.scss"
interface CarrosselProps{
    images: string[]
}
function Carrossel({images}:CarrosselProps){
    const urlImages = images;
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide((slide) => (slide === urlImages.length - 1 ? 0 : slide + 1))
    }
    const previousSlide = () =>{
        setSlide((slide) => (slide === 0 ? urlImages.length - 1 : slide - 1));
    }
    return(
        <div className="carrossel">
            <MdKeyboardArrowLeft className="arrow arrow-left" onClick={previousSlide}/>

                {urlImages.map((image, index) => (
                    <Image src={image} key={index} alt="" width={1000} height={1000} className={slide === index ? "slide" : "slide slide-hidden"} />
                ))}

                <MdKeyboardArrowRight className="arrow arrow-right" onClick={nextSlide}/>

                <span className="indicators">
                    {urlImages.map((item, index) => (
                        <button onClick={undefined} key={index} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button>
                    ))}
                </span>
        </div>
    )
}
export default Carrossel