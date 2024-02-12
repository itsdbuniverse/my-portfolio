
import "./app.scss"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/navbar"
import Parallex from "./components/parallex/Parallex"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"
import Cursor from "./components/cursor/Cursor"


function App() {
  

  return (
    <>
    <Cursor/>
     <section id="Homepage">
      <Navbar/>
      <Hero/> 
     </section>
     <section id="Services"><Parallex type="services"/></section>
     <section><Services/></section>
     <section id="Portfolio"><Parallex type="portfolio"/></section>
     <Portfolio/>
     <section id="Contact">
      <Contact/>
     </section>
     
    </>
  )
}

export default App
