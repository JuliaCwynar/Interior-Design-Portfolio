import React from 'react'
import './products.css'

function Products() {


    return (
        <div className='products'>
            <h1>realizacje</h1>
            <div className='products--img'>
                <div class="image-container">
                    <img src="../public/wiz1.png" class="image" />
                    <div class="text">zobacz więcej</div>
                </div>
            <div class="image-container">
                <img src="../public/wiz1.png" class="image" />
                <div class="text">zobacz więcej</div>
            </div>
            </div>
            <div className='button'><button>wszystkie realizacje</button></div>
        </div>
    )

}

export default Products