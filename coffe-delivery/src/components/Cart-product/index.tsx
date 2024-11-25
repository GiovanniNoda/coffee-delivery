import { InputNumber } from "../Input-number"
import { RemoveButton } from "../Remove-button"
import { CartProductContainer } from "./styles"

interface CartProductProps extends React.HTMLAttributes<HTMLDivElement> {
    photo: string
    title: string
    price: number
    removeItemCart: () => void
}


export function CartProduct({ photo, title, price, removeItemCart, ...props }: CartProductProps) {
    return(
        <CartProductContainer {...props}>
            <img src={photo} alt={title} />

            <div className="container">
                <div className="content-name">
                    <p>{title}</p>

                    <span>R$ {price}</span>
                </div>

                <div className="content-amount">
                    <InputNumber />

                    <RemoveButton onClick={removeItemCart} />
                </div>
            </div>
    </CartProductContainer>
    )
}