import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';

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

}/*
                <main class="container">
          <p>Hello 👋 I'm</p>
          <section class="animation">
            <div class="first"><div>Carlos Córdova</div></div>
            <div class="second"><div>Web Developer</div></div>
            <div class="third"><div>Systems Engineer</div></div>
          </section>
        </main> */

export default Home;