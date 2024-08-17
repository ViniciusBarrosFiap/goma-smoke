export interface ProductDB {
    id: string;
    name: string;
    category: string;
    characteristics: characteristicsProps[];
    description: string;
    images: Image[];
    price: number;
}
interface Image {
    url: string;
    alt?: string;
}
interface characteristicsProps {
    id: string;
    name: string;
    description: string;
}
