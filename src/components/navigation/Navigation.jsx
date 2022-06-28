import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav style={{display:'flex', justifyContent:'flex-end'}}>
        <Link to='/'>
            <p className='f3 link dim pa3 underline pointer black'>Sign out</p>
        </Link>
        
    </nav>
  )
}
