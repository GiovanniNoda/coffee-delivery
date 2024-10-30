import { InputNumber } from "../Input-number"
import { RemoveButton } from "../Remove-button"
import { CartProductContainer } from "./styles"

interface CartProductProps extends React.HTMLAttributes<HTMLDivElement>{
    src: string
    alt?: string
    name: string
    price: string
}

export function CartProduct({ src, alt, name, price, ...props }: CartProductProps) {
    return(
        <CartProductContainer {...props}>
            <img src={src} alt={alt} />

            <div className="container">
                <div className="content-name">
                    <p>{name}</p>

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