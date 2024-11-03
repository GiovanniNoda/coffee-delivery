import styled from "styled-components"
import { media } from "../../styles/mediaQueries"

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
                display: flex;
                flex-flow: column nowrap;
            }

            #address-form {
                h4 {
                    svg {
                        color: ${props => props.theme['yellow-dark']};
                    }
                }

                #zip-code {
                    width: 40%;
                }

                .number-complement-container, .city-state-container {
                    display: flex;
                    gap: 0.75rem;
                }

                .number-complement-container {
                    #number {
                        width: 40%;
                    }

                    #complement {
                        width: 60%;
                    }
                }

                .city-state-container {
                    #neighborhood {
                        width: 40%;
                    }

                    #city {
                        width: 45%;
                    }

                    #state {
                        width: 15%;
                    }
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

        .selected-coffees-container {
            #selected-coffees {
                display: flex;
                flex-flow: column nowrap;
                gap: 1.5rem;
                max-width: 448px;

                border-radius: 6px 44px;

                .total-items-container {
                    display: flex;
                    flex-flow: column nowrap;
                    gap: 0.75rem;

                    .total-items, .delivery, .total {
                        display: flex;
                        flex-flow: row nowrap;
                        justify-content: space-between;
                    }

                    .total-items, .delivery {
                        .description {
                            font-size: 0.875rem;
                            line-height: 130%;
                            color: ${props => props.theme['base-text']};
                        }

                        .price {
                            line-height: 130%;
                            color: ${props => props.theme['base-text']};
                        }
                    }

                    .total {
                        strong {
                            font-size: 1.25rem;
                            font-weight: 700;
                            line-height: 130%;
                            color: ${props => props.theme['base-subtitle']};
                        }
                    }
                }

                a {
                    text-decoration: none;
                }
            }
        }
    }

    ${media.laptopM} {
        form {
            flex-flow: column nowrap;
            gap: 3rem;
            align-items: center;

            .selected-coffees-container {
                h2 {
                    margin-left: -6.2rem;
                }
            }
        }
    }

    ${media.mobile} {
        form {
            justify-content: center;
            align-items: center;

            .address-paymanet-container {
                width: 100%;

                #address-form {
                    #zip-code {
                        width: 100%;
                    }

                    .number-complement-container {
                        flex-flow: column nowrap;

                        #number {
                            width: 100%;
                        }

                        #complement {
                            width: 100%;
                        }
                    }

                    .city-state-container {
                        flex-flow: column nowrap;

                        #neighborhood {
                            width: 100%;
                        }

                        #city {
                            width: 100%;
                        }

                        #state {
                            width: 100%;
                        }
                    }
                }

                #payment-method {

                    .select-card-container {
                        flex-flow: column nowrap;
                        align-items: center;
                    }
                }
            }
            
            .selected-coffees-container {
                width: 100%;

                h2 {
                   margin-left: 0;
                }

                #selected-coffees {
                    padding: 1.5rem 0.875rem;


                    .total-items-container {
                        .total-items, .delivery  {
                            .description {
                                font-size: 0.775rem;
                            }

                            .price {
                                font-size: 0.875rem;
                            }
                        }

                        .total {
                            strong {
                                font-size: 1rem;
                            }
                        }
                    }
                }
            }
        }
    }   
`