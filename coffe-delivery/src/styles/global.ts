import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme['background']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }
`