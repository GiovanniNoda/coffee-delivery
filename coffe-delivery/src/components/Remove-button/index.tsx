import { RemoveButtonContainer } from "./styles"
import { Trash } from "phosphor-react"

export function RemoveButton({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return(
        <RemoveButtonContainer type="button" {...props}>
            <Trash />

            <span>remover</span>
        </RemoveButtonContainer>
    )
}