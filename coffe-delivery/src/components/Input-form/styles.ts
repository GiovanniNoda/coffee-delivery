import styled from "styled-components"

interface InputFormContainerProps {
    $widthPercentage: number;
  }

export const InputFormContainer = styled.input<InputFormContainerProps>`
    width: ${({ $widthPercentage }) => `${$widthPercentage}%`};
    padding: 0.75rem;
    border: 1px solid ${props => props.theme['base-button']};
    background: ${props => props.theme['base-input']};
    border-radius: 4px;

    color: ${props => props.theme['base-text']};
    font-size: 0.875rem;
    font-weight: 400;

    outline: none;

    margin-bottom: 1rem;

    &:focus {
        border: 1px solid ${props => props.theme['yellow-dark']};
    }

    &::placeholder {
        color: ${props => props.theme['base-label']};
        font-size: 0.875rem;
        font-weight: 400;
    }
`