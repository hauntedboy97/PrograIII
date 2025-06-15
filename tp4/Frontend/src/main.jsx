import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TraerPersonas from './components/TraerPersonas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TraerPersonas />
  </StrictMode>,
)
