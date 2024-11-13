import { createContext, ReactNode, useContext, useState } from "react";
import tradicional from "../assets/coffe-types-assets/tradicional.svg"

interface CartContextData {
    addItemCart: (product: ItemData) => void
    removeItemCart: () => void
    itemsCart: ItemData[]
}

export interface ItemData {
    photo: string
    title: string
    price: number
    quantity?: number
    coffeeDescription?: string
}

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: {
    children: ReactNode
}) {
    const [itemsCart, setItemsCart] = useState<ItemData[]>([])

    function addItemCart(product: ItemData) {
        setItemsCart([...itemsCart, product])
    }

    function removeItemCart() {

    }

    return (
        <CartContext.Provider value={{
            addItemCart, removeItemCart, itemsCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)