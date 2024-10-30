import styled from "styled-components"

export const SelectCardContainer = styled.button`
    width: 178px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;

    background: ${props => props.theme['base-button']};
    border-radius: 6px;
    border: none;

    cursor: pointer;
    border: 1px solid transparent;

    transition: background 0.2s;

    &:hover {
        background: ${props => props.theme['base-hover']};
    }

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
        color: ${props => props.theme['base-text']};
    }
`