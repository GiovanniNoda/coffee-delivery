import { ItemData } from "../../hooks/useCart"
import { InputNumber } from "../Input-number"
import { RemoveButton } from "../Remove-button"
import { CartProductContainer } from "./styles"

type CartProductProps = ItemData
   

export function CartProduct({ photo, title, price, ...props }: CartProductProps) {
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

                    <RemoveButton />
                </div>
            </div>
    </CartProductContainer>
    )
}