import styled from "styled-components"

export const ConfirmButtonContainer = styled.button`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.75rem 0.5rem;
    background: ${props => props.theme['yellow']};
    border-radius: 6px;
    cursor: pointer;
    border: none;

    font-size: 0.875rem;
    font-weight: 700;
    color: ${props => props.theme['white']};

    transition: background 0.2s;

    &:hover {
        background: ${props => props.theme['yellow-dark']};
    }
`