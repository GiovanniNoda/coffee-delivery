import styled from "styled-components"

export const CartContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    background: ${props => props.theme['yellow-light']};
    border-radius: 6px;
    border: none;

    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        transition: transform 0.2s;
    }

    svg {
        color: ${props => props.theme['yellow-dark']};
    }
`