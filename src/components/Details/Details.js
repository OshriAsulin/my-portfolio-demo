import React from 'react'
import './Details.css'
import profileImg from '../../assets/background.jpg'
const Details = () => {
    return (
        <div className='details-container'>
            <div className='aboutme'>
                <div className='first-details'>
                    <img className='profile-img' src={profileImg} />
                    <div className='profile-details'>
                        <p><b>Full Name:</b> Oshri Asulin</p>
                        <p><b>Profession:</b> Oshri Asulin</p>
                        <p><b>Email:</b> Oshri Asulin</p>
                        <p><b>Phone:</b> Oshri Asulin</p>
                        <p className='linkedin'><b>Linkedin:</b> <a>https://www.linkedin.com/in/oshri-asulin-dev/</a></p>
                        <button className='resume-btn'>Download Resume</button>
                    </div>
                </div>
                <div className='second-details'>
                    <h3>Who am i ?</h3>
                    <p>Able to effectively self-manage during independent projects, as well as
                        collaborate in a team setting, and i have a passion for development and computer
                        science at all ends of the spectrum.</p>
                </div>
                <div>
                    <h1></h1>
                </div>
            </div>
        </div>
    )
}

export default Details