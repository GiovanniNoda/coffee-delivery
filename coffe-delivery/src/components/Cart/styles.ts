import styled from "styled-components"

export const CartContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

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

    .cart-count {
        position: absolute;
        top: -5px; // Ajuste conforme necessário
        right: -10px; // Ajuste conforme necessário
        background: yellow;
        border-radius: 50%;
        color: black;
        padding: 0 5px;
        font-size: 12px; // Ajuste conforme necessário
    }
`