import React, { useState } from 'react'
import {InstagramOutlined, MenuOutlined} from '@ant-design/icons'
import logo from '../../public/logo.svg'
import './navbar.css'
import {Link} from 'react-router-dom'




function Navbar() {

    const [showMenu, setShowMenu] = useState(window.innerWidth > 600);


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
                        <Link to="/"><img src={logo} alt='Maria Design' onClick={() => handleClick(0)}></img></Link>
                        {showMenu  &&
                        <ul className='listed--menu'>
                            <li onClick={() => handleClick(900)}>o mnie</li>
                            <li onClick={() => handleClick(1650)}>realizacje</li>
                            <li onClick={() => handleClick(2450)}>oferta</li>
                            <li onClick={() => handleClick(3800)}>kontakt</li>
                            <li ><a href='www.instagram.com/julka.cwynar'/><InstagramOutlined className='instagram'/></li>
                        </ul>
                        }
                        <li className='more' onClick={() => setShowMenu(!showMenu)}><MenuOutlined/></li>
                    </ul>
            </div>
      </>
    )
  }
  
  export default Navbar