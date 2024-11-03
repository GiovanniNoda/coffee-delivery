import styled from "styled-components"
import { media } from "../../styles/mediaQueries"

export const CartProductContainer = styled.div`
    width: 368px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.25rem;
    padding: 0.5rem 0.25rem 2rem;

    border-bottom: 1px solid ${props => props.theme['base-button']};

    background: ${props => props.theme['base-card']};

    img {
        width: 64px;
        height: 64px;
    }

    .container {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        gap: 0.5rem;
    }

    .content-name {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        p {
            ${props => props.theme['base-subtitle']}
        }

        span {
            font-weight: 700;
            color: ${props => props.theme['base-text']};
        }
    }

    .content-amount {
        display: flex;
        flex-flow: row nowrap;
        gap: 0.5rem;
    }

    ${media.mobile} {
        width: 100%;
        padding: 0rem 0rem 2rem;

        img {
            width: 56px;
        }

        .content-name {
            p {
                font-size: 0.75rem;
            }

            span {
                font-size: 0.75rem;
            }
        }
    }
`