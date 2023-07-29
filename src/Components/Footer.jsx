import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='social'>
            <BsLinkedin size={30}/>
            <BsGithub  size={30}/>
            <BsInstagram  size={30}/>
        </div>
        <div className='text'>
            <p>Copyright © 2023 Muthu Brijesh.</p>
        </div>
    </div>
  )
}

export default Footer