import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
const Navbar = () => {
  const [click, setClick] = useState(true)

  const [color, setColor] = useState(false)
  const changeColor = () => {
      if (window.scrollY >= 100) {
          setColor(true);
      } else {
          setColor(false)
      }
  };
  window.addEventListener("scroll", changeColor);


  const handleClick = () => {
    setClick(!click)
  }
  const handleComponent = (component) => {
    const section = document.querySelector(`#${component}`);
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <h3 className='name-portfolio'>Oshri Asulin Portfolio.</h3>
      <div >
        <ul className={click ? 'navbar' : 'navbar active'} id="navbar">
          <li><a onClick={(() => handleComponent('projects'))}>Projects</a></li>
          <li><a onClick={(() => handleComponent('skills'))}>Skills</a></li>
          <li><a onClick={(() => handleComponent('about'))}>About</a></li>

        </ul>
      </div>
      <div className='responsiveBtn' onClick={handleClick}>
        {click ? (<FaBars size={20} />) : (<FaTimes size={20} />)}
      </div>
    </div>
  )
}

export default Navbar