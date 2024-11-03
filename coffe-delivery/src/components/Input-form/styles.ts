import styled from "styled-components"

export const InputFormContainer = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid ${props => props.theme['base-button']};
    background: ${props => props.theme['base-input']};
    border-radius: 4px;

    color: ${props => props.theme['base-text']};
    font-size: 0.875rem;
    font-weight: 400;

    outline: none;

    margin-bottom: 1rem;

    display: flex;
    flex-shrink: 1;

    &:focus {
        border: 1px solid ${props => props.theme['yellow-dark']};
    }

    &::placeholder {
        color: ${props => props.theme['base-label']};
        font-size: 0.875rem;
        font-weight: 400;
    }
`