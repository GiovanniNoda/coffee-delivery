import styled from "styled-components"

export const CheckoutContainer = styled.main`
    width: 100%;

    form {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        padding-bottom: 4rem;

        h2 {
            font-family: "Baloo 2", sans-serif;
            font-size: 1.125rem;
            font-weight: 700;
            line-height: 130%;
            color: ${props => props.theme['base-subtitle']};
            margin-bottom: 1rem;
            }

        .form-content {
            border: none;
            background: ${props => props.theme['base-card']};
            padding: 2.5rem;
            border-radius: 6px;

            h4 {
                display: flex;
                gap: 0.5rem;

                font-size: 1rem;
                font-weight: 400;
                line-height: 130%;
                color: ${props => props.theme['base-subtitle']};
            }

            .phrase {
                margin-left: 1.875rem;
                font-size: 0.875rem;
                color: ${props => props.theme['base-text']};
                line-height: 130%;

                margin-bottom: 2rem;
            }
        }

        .address-paymanet-container {
            display: flex;
            flex-flow: column nowrap;

            #address-form, #payment-method {
                max-width: 640px;
                margin-bottom: 0.75rem;
            }

            #address-form {
                h4 {
                    svg {
                        color: ${props => props.theme['yellow-dark']};
                    }
                }

                .number-complement-container, .city-state-container {
                    display: flex;
                    gap: 0.75rem;
                }
            }

            #payment-method {
                h4 {
                    svg {
                        color: ${props => props.theme['purple']};
                    }
                }

                .select-card-container {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-between;
                    gap: 0.75rem;
                }
            }
        }
    }
`