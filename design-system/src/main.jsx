import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Global CSS removed in favor of theme variables and SCSS modules
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
