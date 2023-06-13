import React, { useRef } from 'react';
import Navbar from '../src/components/navbar.jsx';
import Footer from '../src/components/footer.jsx';
import './components/app.css';
import Homepage from './homepage.jsx';
import Portfolio from '../src/components/portfolio.jsx';
import { Route, Routes } from 'react-router-dom';
import SingleProject from '../src/components/singleproject.jsx';

function App() {

  const aboutRef = useRef(null)
  const offerRef = useRef(null)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)
  
  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        offerRef={offerRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />
      <Routes>
        <Route path="/" element={<Homepage aboutRef={aboutRef} portfolioRef={portfolioRef} offerRef={offerRef} />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project" element={<SingleProject />} />
      </Routes>
      <Footer ref={contactRef} />
    </>
  );
}

export default App;