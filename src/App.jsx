import React from 'react'
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Services from "./Components/Services/Services"
import Portafolio from "./Components/Portafolio/Portafolio"
import  Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

                                                

const App = () => {
  return (
    <>

    <Header></Header>
    <Nav></Nav>
    <About></About>
    <Experience></Experience>
    <Services></Services>
    <Portafolio></Portafolio>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App