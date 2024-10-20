import { CartContainer } from "./styles"
import { ShoppingCart } from "phosphor-react"

export function Cart() {
    return(
        <CartContainer>
            <ShoppingCart size={20} />
        </CartContainer>
    )
}