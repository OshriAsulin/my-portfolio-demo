import React from 'react'
import About from './pages/About/About'
import Navbar from './Navbar/Navbar'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Footer from './Footer/Footer'
import Img from './images/Img/Img'
import Details from './Details/Details'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Img/>
        {/* <Details /> */}
        <About/>
        <Projects/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default Home