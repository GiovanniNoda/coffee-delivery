import styled from "styled-components"

export const CartProductContainer = styled.div`
    width: 368px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.25rem;
    padding: 0.5rem 0.25rem;

    background: ${props => props.theme['base-card']};

    img {
        width: 64px;
        height: 64px;
    }

    .container {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        gap: 0.5rem;
    }

    .content-name {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        p {
            ${props => props.theme['base-subtitle']}
        }

        span {
            font-weight: 700;
            color: ${props => props.theme['base-text']};
        }
    }

    .content-amount {
        display: flex;
        flex-flow: row nowrap;
        gap: 0.5rem;
    }
`