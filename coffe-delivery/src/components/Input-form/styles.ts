import styled from "styled-components"

export const InputFormContainer = styled.input<{widthPercentage: number}>`
    width: ${(props) => props.widthPercentage}%;
    padding: 0.75rem;
    border: 1px solid ${props => props.theme['base-button']};
    background: ${props => props.theme['base-input']};
    border-radius: 4px;

    color: ${props => props.theme['base-text']};
    font-size: 0.875rem;
    font-weight: 400;

    outline: none;

    &:focus {
        border: 1px solid ${props => props.theme['yellow-dark']};
    }

    &::placeholder {
        color: ${props => props.theme['base-label']};
        font-size: 0.875rem;
        font-weight: 400;
    }
`