import styled from "styled-components"
import { media } from "../../styles/mediaQueries"

export const InputNumberContainer = styled.div`
    width: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;

    background: ${props => props.theme['base-button']};
    border-radius: 6px;

    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        // remove as setas de icrementação e decrementação do input
    }

    input {
        width: 0.5rem;
        border: none;
        outline: none;
        background: ${props => props.theme['base-button']};
        color: ${props => props.theme['base-title']};
    }

    button {
        all: unset;
        cursor: pointer;
        color: ${props => props.theme['purple-dark']};
        font-size: 14px;
    }

    ${media.mobile} {
        width: 3.5rem;
        padding: 0.25rem;

        input {
            font-size: 0.75rem;
        }

        button {
            font-size: 12px;
        }
    }
`