import { InputNumber } from "../Input-number"
import { RemoveButton } from "../Remove-button"
import { CartProductContainer } from "./styles"
import tradicional from "../../assets/coffe-types-assets/tradicional.svg"

export function CartProduct() {
    return(
        <CartProductContainer>
            <img src={tradicional} alt="" />

            <div className="container">
                <div className="content-name">
                    <p>Expresso Tradicional</p>

                    <span>R$9,90</span>
                </div>

                <div className="content-amount">
                    <InputNumber />

                    <RemoveButton />
                </div>
            </div>
    </CartProductContainer>
    )
}