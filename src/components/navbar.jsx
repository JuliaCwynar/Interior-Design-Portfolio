import React, { useRef } from 'react'
import {InstagramOutlined} from '@ant-design/icons'
import logo from '../../public/logo.svg'
import './navbar.css'




function Navbar() {

    const handleClick = (position) => {
        window.scrollTo({
            top: position,
            behavior: 'smooth',
      });
      console.log(position)
    }

    return (
      <>
        <div className='navbar'>
                    <ul>
                        <img src={logo} alt='Maria Design' onClick={() => handleClick(0)}></img>
                        <li onClick={() => handleClick(900)}>o mnie</li>
                        <li onClick={() => handleClick(1650)}>realizacje</li>
                        <li onClick={() => handleClick(2450)}>oferta</li>
                        <li onClick={() => handleClick(3800)}>kontakt</li>
                        <li><a href='www.instagram.com/julka.cwynar'/><InstagramOutlined/></li>
                    </ul>
            </div>
      </>
    )
  }
  
  export default Navbar