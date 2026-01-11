import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Section1  from './components/section1.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Section1></Section1>
  </StrictMode>,
)
