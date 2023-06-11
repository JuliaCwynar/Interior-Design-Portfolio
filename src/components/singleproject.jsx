import React, { useState } from 'react';
import './singleproject.css';
import wiz1 from '../../public/wiz1.png';
import {PlusCircleOutlined, CloseOutlined, LeftOutlined, RightOutlined} from '@ant-design/icons'

function Photo() {
  const [showImg, setShowImg] = useState(false);

  const closeImage = () => {
    setShowImg(!showImg);
    console.log(showImg);
  };


  return (
    <div className='single--photo'>
      <div className="image-container">
        <img src={wiz1} className="image" />
        <div className="text" onClick={closeImage}><PlusCircleOutlined style={{fontSize: '2vw'}}/></div>
        {showImg && (
          <div className='big--img'>
            <span className='close--button'><CloseOutlined onClick={closeImage} /></span>
            <span className='prev--button'><LeftOutlined /></span>
            <img src={wiz1} alt='Big Image' />
            <span className='next--button'><RightOutlined /></span>
            <p className='big--img--desc'>Projekt</p>
          </div>
        )}
      </div>
    </div>
  );
}

function SingleProject() {
  return (
    <div className='single--project' >
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
    </div>
  );
}

export default SingleProject;