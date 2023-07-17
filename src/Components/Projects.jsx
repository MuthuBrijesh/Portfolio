import React from 'react';
import PageHeader from './PageHeader';
import { AiFillProject } from 'react-icons/ai';
import './About.css';
import Gas from '../Assets/Gas.png';
import Helping from '../Assets/HelpingHand.png';
import Hotel from '../Assets/Hotel.png';
import Market from '../Assets/marketnew.png';
import TCS from '../Assets/TCS.png';
import Rasa from '../Assets/Rasa.png';
import {FaGithub} from 'react-icons/fa';

const Projects = () => {

  const click1 = () => {
    window.location.replace('https://github.com/MuthuBrijesh/Royal-Rooms');
  }
  const click2 = () => {
    window.location.replace('https://github.com/MuthuBrijesh/Helping_Hand_App');
  }
  const click3 = () => {
    window.location.replace('https://github.com/MuthuBrijesh/Supermarket-Billing-System');
  }
  const click4 = () => {
    window.location.replace('https://github.com/MuthuBrijesh/TCS-Stock-Price-Forecasting');
  }
  const click5 = () => {
    window.location.replace('https://github.com/MuthuBrijesh/Gas-Booking-Management-System');
  }
  const click6 = () => {
    window.location.replace('https://github.com/MuthuBrijesh/-Basic-Mood-Bot-using-RASA-Framework');
  }

  return (
    <section id="project" className="project">
      <PageHeader headerText="Project"
        icon={<AiFillProject size={40} />} />
      <div className='aboutme2'>
        <h3>My Recent Works</h3>
        <div className='skill456'>
          <div className='course_card1'>
            <img src={Hotel} alt="Javascript" />
            <div class="overlay">
              <div class="text" onClick={click1}><h5>Hotel Booking System</h5><button><FaGithub/> View</button></div>
            </div>
          </div>
          <div className='course_card1'>
            <img className='image' src={Helping} alt="Javascript" />
            <div class="overlay">
              <div class="text" onClick={click2}>
                <h5>Helping Hand</h5>
                <button><FaGithub/> View</button></div>
            </div>
          </div>
          <div className='course_card1'>
            <img src={Market} alt="Javascript" />
            <div class="overlay">
              <div class="text" onClick={click3}><h5>Super Market Billing System</h5><button><FaGithub/> View</button></div>
            </div>
          </div>
          <div className='course_card1'>
            <img src={TCS} alt="Javascript" />
            <div class="overlay">
              <div class="text" onClick={click4}><h5>TCS Stock Forecasting</h5><button><FaGithub/> View</button></div>
            </div>
          </div>
          <div className='course_card1'>
            <img src={Gas} alt="Javascript" />
            <div class="overlay">
              <div class="text" onClick={click5}><h5>Online Gas Booking System</h5><button><FaGithub/> View</button></div>
            </div>
          </div>
          <div className='course_card1'>
            <img src={Rasa} alt="Javascript" />
            <div class="overlay">
              <div class="text" onClick={click6}><h5>Rasa Basic Mod Bot</h5><button><FaGithub/> View</button></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects