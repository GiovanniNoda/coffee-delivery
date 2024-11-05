import styled from "styled-components"
import { media } from "../../styles/mediaQueries"

export const LayoutContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    ${media.laptopM} {
        width: 90%;
    }
`