import { useState } from "react";
import "./style.scss"
import { MdExpandMore } from "react-icons/md";

interface AccordionProps{
    title: string,
    description: string,
    titleForDescription: string
   
}
function Accordion({title, description, titleForDescription}:AccordionProps){
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
                        <h2>{titleForDescription}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Accordion