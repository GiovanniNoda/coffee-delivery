import { CartButtonContainer } from "./styles"
import { ShoppingCart } from "phosphor-react"

export function CartButton({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return(
        <CartButtonContainer {...props}>
            <ShoppingCart size={22} />
        </CartButtonContainer>
    )
}