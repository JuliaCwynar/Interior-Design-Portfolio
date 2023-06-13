import React from 'react'
import './products.css'
import wiz1 from '../../public/wiz1.png'
import {Link} from 'react-router-dom'

function ProjectTile() {

    return (
            <div className='products--img'>
                <div class="image-container">
                    <img src={wiz1} class="image" />
                    <Link to="/project"><div class="text">Projekt</div></Link>
            </div>
            </div>
         
    )

}

export default ProjectTile