import { useState, createContext, useContext, ReactNode } from "react";

// Define a interface para o contexto do carrinho
interface CartContextType {
    cartCount: number;
    incrementCart: () => void;
}

// Cria o contexto com um valor padrão
const defaultCartContext: CartContextType = {
    cartCount: 0,
    incrementCart: () => {}, // Função vazia como padrão
};

const CartContext = createContext<CartContextType>(defaultCartContext); // Remove o undefined

interface CartProviderProps {
    children: ReactNode; // Define o tipo de children como ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
    const [cartCount, setCartCount] = useState(0);

    const incrementCart = () => {
        setCartCount((prevCount) => prevCount + 1);
    };

    return (
        <CartContext.Provider value={{ cartCount, incrementCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Cria um hook para usar o contexto
export const useCart = () => {
    const context = useContext(CartContext);
    return context; // Removido o check de undefined, pois agora é garantido que não será undefined
};
