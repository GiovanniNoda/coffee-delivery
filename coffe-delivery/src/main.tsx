import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './hooks/usecart'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
