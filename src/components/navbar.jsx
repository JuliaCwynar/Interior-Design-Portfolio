import React, { useState } from 'react';
import { InstagramOutlined, MenuOutlined } from '@ant-design/icons';
import logo from '../../public/logo.svg';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ aboutRef, offerRef, portfolioRef, contactRef }) {
  const [showMenu, setShowMenu] = useState(window.innerWidth > 600);


  return (
    <>
      <div className="navbar">
        <ul>
          <Link to="/">
            <img src={logo} alt="Maria Design" onClick={() => window.scrollTo({top: position, behavior: 'smooth'})} />
          </Link>
          {showMenu && (
            <ul className="listed--menu">
              <li onClick={() => aboutRef.current.scrollIntoView({behavior: 'smooth'})}>o mnie</li>
              <li onClick={() => portfolioRef.current.scrollIntoView({behavior: 'smooth'})}>realizacje</li>
              <li onClick={() => offerRef.current.scrollIntoView({behavior: 'smooth'})}>oferta</li>
              <li onClick={() => contactRef.current.scrollIntoView({behavior: 'smooth'})}>kontakt</li>
              <li>
                <a href="www.instagram.com/julka.cwynar" />
                <InstagramOutlined className="instagram" />
              </li>
            </ul>
          )}
          <li className="more" onClick={() => setShowMenu(!showMenu)}>
            <MenuOutlined />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;