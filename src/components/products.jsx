import React from 'react'
import './products.css'
import wiz1 from '../../public/wiz1.png'
import { Link} from 'react-router-dom'

function Products() {


    return (
        <div className='products'>
            <h1>realizacje</h1>
            <div className='products--img'>
                <div class="image-container">
                    <img src={wiz1} class="image" />
                    <div class="text">zobacz więcej</div>
                </div>
            <div class="image-container">
                <img src={wiz1} class="image" />
                <div class="text">zobacz więcej</div>
            </div>
            </div>
            <div className='button'><Link to="/portfolio"><button onClick={() => window.scrollTo({top: '0vw'})}>wszystkie realizacje</button></Link></div>
        </div>
    )

}

export default Products