import { CartContainer } from "./styles"
import { ShoppingCart } from "phosphor-react"
import { useCart } from "../../hooks/usecart"

export function Cart() {
    const { cartCount } = useCart()

    return(
        <CartContainer>
            <ShoppingCart size={22} />
            {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span> // Exibe a contagem
            )}
        </CartContainer>
    )
}