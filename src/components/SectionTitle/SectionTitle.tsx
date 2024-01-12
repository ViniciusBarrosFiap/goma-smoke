import "./style.scss"
interface SectionTitleProps{
    title: string;
}
function SectionTitle({title}: SectionTitleProps){
    return(
        <div className="div-titleSection">
            <h1>{title}</h1>
            <div className="base-line"></div>
        </div>
    )
}
export default SectionTitle