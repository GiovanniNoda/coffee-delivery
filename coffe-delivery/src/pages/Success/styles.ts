import styled from "styled-components"

export const SuccessContainer = styled.main`
    width: 100%;

    display: flex;
    flex-flow: row wrap;
    gap: 6.625rem;

    .container {
        display: flex;
        flex-flow: column nowrap;
        gap: 2.5rem;
        margin-top: 5rem;

        .text-container {
            display: flex;
            flex-flow: column nowrap;
            gap: 0.25rem;

            .success-message {
                font-family: "Baloo 2", sans-serif;
                font-size: 2rem;
                font-weight: 800;
                line-height: 130%;

                color: ${props => props.theme['yellow-dark']};
            }

            p {
                font-size: 1.25rem;
                line-height: 130%;
                
                color: ${props => props.theme['base-subtitle']};
            }
        }

        .informations-container {
            display: flex;
            flex-flow: column nowrap;
            gap: 2rem;
            padding: 2.5rem;

            max-width: 526px;
            background: ${props => props.theme['background']};

            border: 1px solid ${props => props.theme['yellow']};
            border-radius: 6px 36px;

            .information-wrapper {
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                gap: 0.75rem;

                .icon-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    border-radius: 50%;
                    
                    svg {
                        color: ${props => props.theme['background']};
                    }
                }

                #local {
                    background: ${props => props.theme['purple']};
                }

                #time {
                    background: ${props => props.theme['yellow']};
                }

                #payment {
                    background: ${props => props.theme['yellow-dark']};
                }

                .text-wrapper {
                    display: flex;
                    flex-flow: column nowrap;

                    p, strong {
                        color: ${props => props.theme['base-text']};
                        line-height: 130%;
                    }
                }
            }
        }
    }

    img {
        width: 492px;
        height: 293px;
        flex-shrink: 0;
        margin-top: 11.25rem;
    }
`