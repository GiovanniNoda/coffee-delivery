import { CartButtonContainer } from "./styles"
import { ShoppingCart } from "phosphor-react"

export function CartButton() {
    return(
        <CartButtonContainer>
            <ShoppingCart size={22} />
        </CartButtonContainer>
    )
}