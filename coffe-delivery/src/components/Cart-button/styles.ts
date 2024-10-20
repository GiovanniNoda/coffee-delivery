import styled from "styled-components"

export const CartButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    background: ${props => props.theme['purple']};
    border-radius: 6px;

    border: none;
    cursor: pointer;

    transition: background 0.2s;

    &:hover {
        background: ${props => props.theme['purple-dark']};
    }

    svg {
        color: ${props => props.theme['white']};
    }

`