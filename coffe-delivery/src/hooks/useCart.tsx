import { createContext, ReactNode, useContext, useState } from "react"

interface CartContextData {
    addItemCart: (product: ItemData) => void
    removeItemCart: (index: number) => void
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

    function removeItemCart(index: number) {
        setItemsCart(itemsCart.filter((_, i) => i !== index))
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