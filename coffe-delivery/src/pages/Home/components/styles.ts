import styled from "styled-components"
import { media } from "../../../styles/mediaQueries"

export const CatalogContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;


    ${media.tablet} {
        justify-content: center;
        gap: 5rem;
    }
`