import React from 'react'
import './CardStyles.css'
import imgdemo from '../../assets/background.jpg'
const Card = () => {
    return (
        <div className='card-container'>
            <div className='card-img'>
                <img className='img-project' src={imgdemo} />
            </div>
            <div className='card-details'>
                a great project with a lot of pattione to devlop a various apps in a lot of languages
            </div>
            <div className='card-stack'>
                the stack:ergergreggergergerger
            </div>
            <div className='card-btns'>
                <a className='btn btn-demo'>demo</a>
                <a className='btn btn-code'>code</a>
            </div>
        </div>
    )
}

export default Card