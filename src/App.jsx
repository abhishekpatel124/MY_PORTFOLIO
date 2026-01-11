import './App.css'
import largeImage from './assets/large.png'

function App() {

  return (
    <>
      <div className="container">
        <img className="logo" src={largeImage} alt="Logo" />
        <div className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#experience">Experience</a>
        </div>
      </div>
    </>
  )
}

export default App
