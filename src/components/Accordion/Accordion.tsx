import { useState } from "react";
import "./style.scss"
import { MdExpandMore } from "react-icons/md";

interface AccordionProps{
    title: string,
   
}
function Accordion({title}:AccordionProps){
    const [accordionIsVisible, setIsVisible] = useState<boolean>(false);
    const handleAccordionClick = () => {
        setIsVisible(!accordionIsVisible);
      };
    return(
        <div className="accordion-item" onClick={handleAccordionClick}>
            <button>
                <h3>{title}</h3>
                <MdExpandMore/>
            </button>
            <div className={`accordion-content  ${accordionIsVisible ? '' : 'hidden'}`}>
                <div className="info-box">
                    <div className="product-infos">
                        <h4>{title}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure assumenda libero ducimus soluta dolorum illo culpa voluptatem neque distinctio velit et eveniet illum adipisci mollitia dolores, accusantium corporis inventore expedita!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Accordion