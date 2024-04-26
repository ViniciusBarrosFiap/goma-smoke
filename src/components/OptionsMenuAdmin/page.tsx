import Image from "next/image";
import Link from "next/link";
import './style.scss';
interface OptionsMenuAdminProps {
    src: string;
    href: string;
    title: string;
}
function OptionsMenuAdmin({src, href, title}: OptionsMenuAdminProps) {
    return (
        <div className="box-option-admin">
            <Link href={href}>
                <div className="option-menu-admin">
                    <Image priority src={src} alt="" height={75} width={75} />
                </div>
            </Link>
            <div>
                <h3>{title}</h3>
            </div>
        </div>    
    )
}
export default OptionsMenuAdmin