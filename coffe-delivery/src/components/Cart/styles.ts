import styled from "styled-components"

export const CartContainer = styled.button`
    padding: 0.5rem;
    background: ${props => props.theme['yellow-light']};
    border-radius: 6px;
    border: none;

    svg {
        color: ${props => props.theme['yellow-dark']};
    }
`