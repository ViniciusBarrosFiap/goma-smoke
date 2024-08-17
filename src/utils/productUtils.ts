import http from "@/http"
import { ProductDB } from "@/Interfaces/IproductDB"

export const getProductFromDb = (url: string, setProducts:(products: ProductDB[]) => void) => {
    http.get(url)
    .then((response): void => {
        setProducts(response.data)
    })
    .catch((error): void => {
        console.log("Erro ao recuperar produtos do DB", error)
    })
    
}
export const getSingleProductFromDb = (url: string, setProduct:(product: ProductDB | undefined) => void) => {
    http.get(url)
    .then((response): void => {
        setProduct(response.data);
    })
    .catch((error): void => {
        console.log("Erro ao recuperar produto do DB", error);
        setProduct(undefined);  // Define como undefined em caso de erro
    });
}