import React from 'react'
import './Footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='box-details'>
                <p>Copyright &copy; Create by OshriDev. All rights reserved</p>
           <div className='profile-btn'>
            <FaLinkedin size={20}/>
            <FaGithub size={20}/>
           </div>
            </div>
        </div>
    )
}

export default Footer