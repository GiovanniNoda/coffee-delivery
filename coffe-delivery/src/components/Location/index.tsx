import { LocationContainer } from "./styles"
import { MapPin } from "phosphor-react"

export function Location() {
    return(
        <LocationContainer>
            <MapPin size={22} />
        
            <span>
                São Paulo, SP
            </span>
        </LocationContainer>
    )
}