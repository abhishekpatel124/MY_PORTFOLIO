import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Section1  from './components/section1.jsx'
import ImageLink from './components/links.jsx'
import About from './components/About.jsx'  
import Project from './components/Project.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   
    <Section1></Section1>
     <ImageLink></ImageLink>
     <About></About>
     <Project></Project>
  </StrictMode>
)
