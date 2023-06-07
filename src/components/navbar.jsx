import React from 'react'
import {InstagramOutlined} from '@ant-design/icons'
import logo from '../../public/logo.svg'
import './navbar.css'




function Navbar() {
  
    return (
      <>
        <div className='navbar'>
                    <ul>
                        <img src={logo}></img>
                        <li><a href="#"/>o mnie</li>
                        <li><a href="#"/>realizacje</li>
                        <li><a href="#"/>oferta</li>
                        <li><a href="#"/>kontakt</li>
                        <li><a href="#"/><InstagramOutlined/></li>
                    </ul>
            </div>
      </>
    )
  }
  
  export default Navbar