import { RemoveButtonContainer } from "./styles"
import { Trash } from "phosphor-react"

export function RemoveButton() {
    return(
        <RemoveButtonContainer type="button">
            <Trash size={16} />

            <span>remover</span>
        </RemoveButtonContainer>
    )
}