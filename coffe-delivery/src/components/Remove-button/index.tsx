import { RemoveButtonContainer } from "./styles"
import { Trash } from "phosphor-react"

export function RemoveButton() {
    return(
        <RemoveButtonContainer type="button">
            <Trash />

            <span>remover</span>
        </RemoveButtonContainer>
    )
}