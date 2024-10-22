import { TypeCoffeeContainer } from "./styles"

interface TypeCoffeText {
    text: string
}

export function TypeCoffee ({ text }: TypeCoffeText) {
    return(
        <TypeCoffeeContainer>
            {text}
        </TypeCoffeeContainer>
    )
}