import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import './Footer.css';

function Footer() {

  const click = () => {
    window.open('https://www.linkedin.com/in/muthubrijesh6/','_blank');
  }
  const click2 = () => {
    window.open('https://github.com/MuthuBrijesh','_blank');
  }
  const click3 = () => {
    window.open('https://www.instagram.com/muthubrijesh/','_blank');
  }

  return (
    <div className='footer'>
        <div className='social'>
            <div className='soci' onClick={click}><BsLinkedin  target='_blank' size={30}/></div>
            <div className='soci' onClick={click2}><BsGithub target='_blank' size={30}/></div>
            <div className='soci' onClick={click3}><BsInstagram target='_blank' size={30}/></div>
        </div>
        <div className='text'>
            <p>Copyright © 2023 Muthu Brijesh.</p>
        </div>
    </div>
  )
}

export default Footer