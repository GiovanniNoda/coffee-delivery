import styled from "styled-components"

export const RemoveButtonContainer = styled.button`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    gap: 0.25rem;

    background: ${props => props.theme['base-button']};
    border: none;
    border-radius: 6px;

    cursor: pointer;
    transition: background 0.1s;

    &:hover {
        background: ${props => props.theme['base-hover']};
    }

    svg{
        color: ${props => props.theme['purple']};
    }

    span{
        font-size: 0.75rem;
        text-transform: uppercase;
    }
`