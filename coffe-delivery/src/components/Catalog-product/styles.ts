import styled from "styled-components"

export const CatalogProductContainer = styled.div`
    width: 16rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    background: ${props => props.theme['base-card']};
    border-radius: 6px 36px;

    margin-bottom: 2.5rem;

    img {
        width: 7.5rem;
        height: 7.5rem;

        margin-top: -20px;
        margin-bottom: 0.75rem;
    }

    .children-container {
        display: flex;
        flex-flow: row wrap;
        gap: 0.25rem;
        margin-bottom: 1rem;
    }

    h3 {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0 1.25rem 2rem;
        font-size: 0.875rem;
        text-align: center;
        color: ${props => props.theme['base-label']};
        line-height: 130%;
    }

    .container {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 1.25rem;
    }

    .span-container {
        font-size: 0.875rem;
        color: ${props => props.theme['base-text']};

        .span-price {
            font-family: "Baloo 2", sans-serif;
            font-size: 1.5rem;
            font-weight: 800;
            color: ${props => props.theme['base-text']};
            margin-left: 0.25rem;
        }
    }

    .cart-container {
        display: flex;
        flex-flow: row nowrap;
        gap: 0.5rem;
    }
`