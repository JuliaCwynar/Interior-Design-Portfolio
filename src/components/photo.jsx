import React from 'react'
import wiz1 from '../../public/wiz1.png'

function Photo() {
    return (
            <div className='parallax' style={{width: '100%', 
                                            objectFit: 'cover',
                                            backgroundImage: `url(${wiz1})`,
                                            minHeight: '55vw',
                                            backgroundAttachment:'fixed',
                                            backgroundPosition:'center',
                                            backgroundRepeat:'no-repeat',
                                            backgroundSize:'cover'}}
        />

    )
}

export default Photo