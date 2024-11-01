import { ThemeProvider } from "styled-components"
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./hooks/usecart"

export function App() {
    return(
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <CartProvider>
            <Router />
          </CartProvider>
        </BrowserRouter>
      </ThemeProvider>
    )
}
