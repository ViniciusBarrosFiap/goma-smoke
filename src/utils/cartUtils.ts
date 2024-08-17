import Swal from "sweetalert2";
import { ProductDB } from "../Interfaces/IproductDB";
export const handleAddCart = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    })
    Toast.fire({
        icon: "success",
        title: "Adicionado ao carrinho!",
    })
}


export const addCart = (product: ProductDB) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");  // Recupera o carrinho do localStorage

    // Verifica se o produto já existe no carrinho
    const existingProductIndex = cart.findIndex((item: ProductDB) => item.id === product.id);

    if (existingProductIndex !== -1) {
        // Produto já existe, incrementa a quantidade
        cart[existingProductIndex].quantity += 1;
    } else {
        // Produto não existe, adiciona novo item com quantidade 1
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));  // Atualiza o carrinho no localStorage
    
    handleAddCart();
}