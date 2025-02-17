import Hero from "./components/Hero/Hero"
import Gap from "./components/gap/Gap"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Wantto from "./components/Wantto/Wantto"
import Footer from "./components/Footer/Footer"

function App() {
  return(
    <>
    <Navbar/>
    <Hero/>
    <Gap/>
    <About/>
    <Skills/>
    <Projects/>
    <Wantto/>
    <Footer/>
    </>
  )
}
export default App