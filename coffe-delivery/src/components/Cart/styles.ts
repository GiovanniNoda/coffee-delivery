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

export const ItemCount = styled.span`
    position: absolute;
    top: -7px;
    right: -7px;
    background-color: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme['white']};
    font-size: 0.75rem;
    font-weight: 700;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`