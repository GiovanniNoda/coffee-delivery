import styled from "styled-components"

export const LocationContainer = styled.span`
    display: flex;
    flex-flow: row nowrap;

    padding: 0.5rem;
    background: ${props => props.theme['purple-light']};
    border-radius: 6px;

    svg {
        color: ${props => props.theme['purple']};
    }

    span {
        font-size: 0.875rem;
        color: ${props => props.theme['purple-dark']};
    }
`