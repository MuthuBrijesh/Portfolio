import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import { Navbaar } from './Navbar'
const Home = () => {

  const navigate = useNavigate();
  const handleevent = () => {
    navigate('./about');
  }

  return (
    <section className='Home'>
      <div className='Homewrapper'>
        <h1>Hello, I'm Muthu Brijesh <br />
          Full Stack Developer
        </h1><br /><br /></div>
      <Animate play duration={1.5} delay={1} 
      start={{ transform: "translateY(300px)",}}
      end={{transform:"translateX(0px)",}}>
        <div className='HomeButton'><button onClick={handleevent}>About Me</button></div>
      </Animate>
    </section>
  )
}

export default Home;