import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import Eye from '../pictures/eye-logo.png';
 

export default function Logo() {
  return (
    <div className='ma4 mt0 container'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner pa3 mt1 "> <img style={{paddingTop: '5px'}} src={Eye} alt="pic" /> </div>
        </Tilt>
    </div>
  )
}
