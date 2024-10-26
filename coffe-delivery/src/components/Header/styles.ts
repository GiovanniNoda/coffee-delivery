import styled from "styled-components"
import { media } from "../../styles/mediaqueries"

export const HeaderContainer = styled.header`
    width: 100%;
    padding: 2rem 0;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    div {
        display: flex;
        gap: 0.5rem;
    }

    ${media.mobile} {
        img {
            width: 70px;
        }
    }
`