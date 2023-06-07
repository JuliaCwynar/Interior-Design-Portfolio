import React from 'react'
import wiz1 from '../../public/wiz1.png'

function Photo() {
    return (
        <div>
            <img src={wiz1} style={{width: '100%', objectFit: 'cover'}}></img>
        </div>

    )
}

export default Photo