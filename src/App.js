import Topbar from "./components/Topbar/Topbar"
import Contact from "./components/Contact/Contact"
import Intro from "./components/Intro/Intro"
import Portfolio from "./components/Portfolio/Portfolio"
// import Testimonials from "./components/Testimonials/Testimonials"
import Work from "./components/Work/Work"
import Menu from "./components/Menu/Menu"
import Skills from "./components/Skills/Skills"
import "./app.scss"
import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='App'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <Skills />
        <Portfolio />
        <Work />
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </div>
  )
}

export default App
