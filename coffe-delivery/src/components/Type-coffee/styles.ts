import styled from "styled-components"

export const TypeCoffeeContainer = styled.span`
    padding: 0.25rem 0.5rem;

    border-radius: 100px;
    background: ${props => props.theme['yellow-light']};

    color: ${props => props.theme['yellow-dark']};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.625rem;
`