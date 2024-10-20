import styled from "styled-components"

export const SelectCardContainer = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;

    background: ${props => props.theme['base-button']};
    border-radius: 6px;
    border: none;

    cursor: pointer;
    border: 1px solid transparent;
    

    &.selected {
        border: 1px solid ${props => props.theme['purple']};
        background: ${props => props.theme['purple-light']};
    }

    svg {
        color: ${props => props.theme['purple']};
    }

    span {
        font-size: 0.75rem;
        text-transform: uppercase;
    }
`