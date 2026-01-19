import './App.css'
import largeImage from './assets/large.png'
import Section1 from './components/section1'
import About from './components/About'
import ImageLink from './components/links'
import Project from './components/Project'
import eCommerceImage from './assets/image copy 4.png'
import flappyBirdImage from './assets/image copy 5.png'
import SimpleWebpage from './assets/image copy 6.png'
function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="container">
        <img className="logo" src={largeImage} alt="Logo" />
        <div className="nav">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection("experience"); }}>Experience</a>
        </div>
      </div>

      <Section1 />
      <div id="about">
             <ImageLink />
        <About />
      </div>
      <Project projects={[
        {
          image: eCommerceImage,
          title: 'E-commerce',
          description: 'An ecommerce website using html, css and javascript.'
        },
        {
           image: flappyBirdImage,
          title: 'Game',
          description: 'Flappy bird game using Html Css and Javascript.'
         },
         {
          image: SimpleWebpage,
          title: 'Simple Webpage',
          description: 'A simple responsive webpage using HTML and CSS.'
         }
      ]} />
 
      <div id="contact">
        <h2>Contact</h2>
      </div>
      <div id="experience">
        <h2>Experience</h2>
      </div>
    </>
  )
}

export default App
