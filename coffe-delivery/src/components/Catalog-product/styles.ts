import styled, { keyframes } from "styled-components";
import { media } from "../../styles/mediaQueries";

export const appear = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.7);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

export const CatalogProductContainer = styled.div<{ $isVisible: boolean; $delay: number }>`
    width: 16rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    background: ${props => props.theme['base-card']};
    border-radius: 6px 36px;

    margin-bottom: 2.5rem;

    //animation
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transform: ${({ $isVisible }) => ($isVisible ? 'scale(1)' : 'scale(0.7)')};
    animation: ${({ $isVisible }) => ($isVisible ? appear : 'none')} 0.6s backwards;
    animation-delay: ${({ $delay }) => `${$delay}s`};

    img {
        width: 7.5rem;
        height: 7.5rem;

        margin-top: -20px;
        margin-bottom: 0.75rem;
    }

    .children-container {
        display: flex;
        flex-flow: row wrap;
        gap: 0.25rem;
        margin-bottom: 1rem;
    }

    h3 {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0 1.25rem 2rem;
        font-size: 0.875rem;
        text-align: center;
        color: ${props => props.theme['base-label']};
        line-height: 130%;
    }

    .container {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 1.25rem;
    }

    .span-container {
        font-size: 0.875rem;
        color: ${props => props.theme['base-text']};

        .span-price {
            font-family: "Baloo 2", sans-serif;
            font-size: 1.5rem;
            font-weight: 800;
            color: ${props => props.theme['base-text']};
            margin-left: 0.25rem;
        }
    }

    .cart-container {
        display: flex;
        flex-flow: row nowrap;
        gap: 0.5rem;
    }

    ${media.tablet} {
        width: 14rem;

        img {
            width: 100px;
            margin-top: -2em;
        }

        h3 {
            font-size: 1.125rem;
        }

        p {
            font-size: 0.75rem;
        }

        .span-container {
            font-size: 0.75rem;
            .span-price {
                font-size: 1.25rem;
            }
        }

        .container {
            justify-content: space-evenly;
        }

        .cart-container {
            div {
                width: 4rem;
            }

            button {
                svg {
                    width: 20px;
                }
            }
        }
    }
`;

