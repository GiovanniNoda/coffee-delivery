import styled from "styled-components"
import { media } from "../../styles/mediaQueries"

export const HomeContainer = styled.main`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;

    .header-container {
        background-image: radial-gradient( #a277ff53, #f1e9c983 45%, #FAFAFA 65%);

        display: flex;
        flex-flow: row nowrap;
        gap: 3.5rem;

        margin-top: 5.75rem;

        .title-container {
            display: flex;
            flex-flow: column nowrap;

            h2 {
                font-family: "Baloo 2", sans-serif;
                font-size: 3rem;
                font-weight: 800;
                line-height: 130%;

                color: ${props => props.theme['base-title']};
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

                margin-bottom: 1rem;
            }

            p {
                font-size: 1.25rem;
                line-height: 130%;
                font-weight: 400;

                color: ${props => props.theme['base-subtitle']};

                max-width: 558px;

                margin-bottom: 4.125rem;
            }

            .items-container {
                display: flex;
                flex-flow: column nowrap;
                gap: 1.25rem;
              

                .two-items-container {
                    display: flex;
                    flex-flow: row nowrap;
                    gap: 2.5rem;
                    

                    .item-wrapper {
                        display: flex;
                        flex-flow: row nowrap;
                        gap: 0.75rem;
                        justify-content: space-between;
                        align-items: center;


                        span:nth-child(2) {
                            color: ${props => props.theme['base-text']};
                            line-height: 130%;
                        }

                        #cart-icon {
                            background: ${props => props.theme['yellow-dark']};
                        }

                        #package-icon {
                            background: ${props => props.theme['base-text']};
                        }

                        #timer-icon {
                            background: ${props => props.theme['yellow']};
                        }

                        #coffee-icon {
                            background: ${props => props.theme['purple']};
                        }
                    }
                }

                .two-items-container > div:first-child {
                        width: 231px;
                    }
            }
        }
    }

    .catalog-title {
        margin-top: 8.75rem;
        margin-bottom: 3.375rem;
        font-family: "Baloo 2", sans-serif;
        font-size: 2rem;
        font-weight: 800;
        line-height: 130%;
        color: ${props => props.theme['base-subtitle']};
    }

    ${media.laptopM} {
       
        .header-container {
            .title-container {
                h2 {
                    font-size: 2.5rem;
                }

                p {
                    font-size: 1.125rem;
                }
                
                .items-container {
                    .two-items-container {
                        .item-wrapper {
                            span {
                                font-size: 0.875rem;
                            }
                        }
                    }
                }
            }
        }
        .header-container img {
             width: 380px;
         }
    }

    ${media.tablet} {
        .header-container {
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;

            .title-container {
                align-items: center;
                justify-content: center;

                h2 {
                    text-align: center;
                    font-size: 2.125rem;
                    margin-bottom: 3rem;
                }

                p {
                    text-align: center;
                    font-size: 1rem;
                    margin-bottom: 2.5rem;
                }
            }
        }

        .header-container img {
             width: 300px;
         }

         .catalog-title {
            margin-top: 6rem;
         }
    }

    ${media.mobile} {
        .header-container {
            margin-top: 2rem;

            .title-container {
                h2 {
                    font-size: 1.6rem;
                    margin-bottom: 1.5rem;
                }

                p {
                    font-size: 0.875rem;
                    max-width: 300px;
                }

                .items-container {
                    gap: 1.5rem;

                    .two-items-container {
                        flex-flow: column nowrap;
                        gap: 1.5rem;

                        .item-wrapper {
                            justify-content: flex-start;

                            span {
                                font-size: 0.75rem;
                            }
                        }
                    }
                }
            }

            img {
                width: 270px;
            }
        }
        .catalog-title {
            margin-top: 4rem;
        }
    }
`

export const IconSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px;
    border-radius: 50%;

    color: ${props => props.theme['background']};

    ${media.mobile} {
        padding: 6px;
    }
`

