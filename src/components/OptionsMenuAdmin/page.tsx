import Image from "next/image";
import './style.scss';
interface OptionsMenuAdminProps {
    src: string;
    title: string;
    onClick: () => void;
}
function OptionsMenuLogged({ src, title, onClick }: OptionsMenuAdminProps) {
    return (
        <div className="box-option-admin">
            <div className="option-menu-admin" onClick={onClick}>
                <Image priority src={src} alt="" height={75} width={75} />
            </div>
            <div>
                <h3>{title}</h3>
            </div>
        </div>
    )
}
export default OptionsMenuLogged