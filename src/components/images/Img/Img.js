import React from 'react'
import './ImgStyles.css'
import bgVid from '../../../assets/anlyzeBg.mp4'
// import { Link } from 'react-router-dom'
// import bgVid from '../../assets/blueAbstractbg.mp4'
import Typewriter from "typewriter-effect";
const Img = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        {/* <img className='into-img' src={bgImg} alt="bgImg"/> */}

        <video id="video-bg" autoPlay muted loop>
          <source src={bgVid} type="video/mp4" />
        </video>
      </div>
      <div className='content'>
        <p>HI, I'M A FULLSTACK DEVELOPER</p>
        <h1>{}</h1>
       <div className='type'>
       <Typewriter options={{
          strings: ['oshri asulin devloper', 'develop with a passinote', 'with a lot human skills'],
          autoStart: true,
          loop: true,
          // delay: 100
        }} />
       </div>
        <div className='links'>
          <a to='/' className='btn'>Projects</a>
          <a to='/contact' className='btn btn-light'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Img

