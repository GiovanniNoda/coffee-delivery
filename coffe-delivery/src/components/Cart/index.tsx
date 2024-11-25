import { useCart } from "../../hooks/useCart"
import { CartContainer, ItemCount } from "./styles"
import { ShoppingCart } from "phosphor-react"


export function Cart() {
    const { itemsCart } = useCart()

    const totalItems = itemsCart.length

    return(
        <CartContainer>
            <ShoppingCart size={22} />
            {totalItems > 0 && <ItemCount>{totalItems}</ItemCount>}
        </CartContainer>
    )
}