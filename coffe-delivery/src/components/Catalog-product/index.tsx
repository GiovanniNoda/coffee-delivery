import { CartButton } from "../Cart-button"
import { InputNumber } from "../Input-number"
import { CatalogProductContainer } from "./styles"

interface CatalogProductProps {
    src: string
    alt?:string
    children: React.ReactNode
    nameCoffee: string
    coffeeDescription: string
    price: string
}

export function CatalogProduct ({ src, alt, children, nameCoffee, coffeeDescription, price }: CatalogProductProps) {
    return(
        <CatalogProductContainer>
            <img src={src} alt={alt} />

            <div className="children-container">
                {children}
            </div>

            <h3>{nameCoffee}</h3>

            <p>{coffeeDescription}</p>

            <div className="container">
                <span className="span-container">
                R$
                    <span className="span-price">{price}</span>
                </span>

                <div className="cart-container">
                    <InputNumber />

                    <CartButton />
                </div>
            </div>
        </CatalogProductContainer>
    )
}