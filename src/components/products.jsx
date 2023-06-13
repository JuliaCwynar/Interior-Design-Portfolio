import React, { forwardRef } from 'react'
import './products.css'
import wiz1 from '../../public/wiz1.png'
import { Link} from 'react-router-dom'

const Products = forwardRef((props, ref) => {

    return (
        <div ref={ref} className='products'>
            <h1>realizacje</h1>
            <div className='products--img'>
                <div class="image-container">
                    <img src={wiz1} class="image" />
                    <div class="text"><Link style={{textDecoration: 'none', color: 'white'}} onClick={() => window.scrollTo({top: 0})} to="/project   ">zobacz więcej</Link></div>
                </div>
            <div class="image-container">
                <img src={wiz1} class="image" />
                <div class="text"><Link style={{textDecoration: 'none', color: 'white'}} onClick={() => window.scrollTo({top: 0})} to="/project">zobacz więcej</Link></div>
            </div>
            </div>
            <div className='button'><Link style={{textDecoration: 'none'}} onClick={() => window.scrollTo({top: 0})} to="/portfolio"><button >wszystkie realizacje</button></Link></div>
        </div>
    )

})

export default Products