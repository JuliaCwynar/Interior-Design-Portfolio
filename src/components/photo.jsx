import React from 'react'
import wiz1 from '../../public/wiz1.png'
import './photo.css'

function Photo() {
    return (
            <div className='parallax' style={{backgroundImage: `url(${wiz1})`}}/>

    )
}

export default Photo