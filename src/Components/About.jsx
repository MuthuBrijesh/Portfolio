import React from 'react'
import PageHeader from './PageHeader';
import { BsPersonFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './About.css';
import JS from '../Assets/JS.png';
import ReactCert from '../Assets/React.png';
import HTML from '../Assets/HTML.png';
import Android from '../Assets/Android.png';
import Java from '../Assets/Java.png';
import Linked from '../Assets/Linked.png';
import GDSC from '../Assets/GDSC.png';
import GOcrackit from '../Assets/GOcrackit.png';
import HashCode from '../Assets/HashCode.png';
import IICC from '../Assets/IICC2.png';
import Kotlin from '../Assets/Kotlin.png';
import Kickstart from '../Assets/Kick Start.png';


const personalDetails = [
  { label: "Name", value: "Muthu Brijesh", },
  { label: "Age", value: "20", },
  { label: "Email", value: "muthubrijeshramasamy20@gmail.com" },
  { label: "Contact No", value: "+91 9150422279" },
  { label: "Address", value: "Rajapalayam , Tamil Nadu" },
  { label: "Country", value: "India" },

]

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me"
        icon={<BsPersonFill size={40} />} />
      <div className='aboutme'>
        <div className='personal_content'>
          <div className='about_content'>
            <Animate play duration={1.5} delay={0}
              start={{ transform: "translateX(-900px)", }}
              end={{ transform: "translateX(0px)", }}>
              <h3>Get to know me!</h3>
              <p>I am Muthu Brijesh, I am doing my final year of B.E in Computer Science and Engineering from Ramco Institute of Technology .
                My educational journey has equipped me with strong analytical, logical, and creative skills that I'm eager to apply in the professional world.
                Throughout my academic career, I developed a keen interest in Full Stack Web Development, Mobile App Development, and Machine Learning.</p>
            </Animate>
          </div>
        </div>
        <div className='service_content'>
          <div className='about_personal'>
            <Animate play duration={1.5} delay={0}
              start={{ transform: "translateX(900px)", }}
              end={{ transform: "translateX(0px)", }}>
              <h3 style={{ marginTop: 20 }}>Personal Infromation</h3>
              <ul>
                {personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className='title'>{item.label}</span>
                    <span className='value'> {item.value}</span>
                  </li>
                ))
                }
              </ul></Animate></div>
        </div>
      </div>
      <div className='aboutme2'>
        <h3>Online Courses</h3>
        <div className='skill456'>
          <div className='course_card'>
            <img src={JS} alt="Javascript"/>
            <div className='card_body'>
              <h5>Javascript</h5>
            </div>
          </div>
          <div className='course_card'>
            <img src={ReactCert} alt="Javascript"/>
            <div className='card_body'>
              <h5>React</h5>
            </div>
          </div>
          <div className='course_card'>
            <img src={HTML} alt="Javascript"/>
            <div className='card_body'>
              <h5>HTML</h5>
            </div>
          </div>
          <div className='course_card'>
            <img src={Android} alt="Javascript"/>
            <div className='card_body'>
              <h5>Android</h5>
            </div>
          </div>
          <div className='course_card'>
            <img src={Java} alt="Javascript"/>
            <div className='card_body'>
              <h5>Java</h5>
            </div>
          </div>
          <div className='course_card'>
            <img src={Linked} alt="Javascript"/>
            <div className='card_body'>
              <h5>Linked List</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='aboutme2'>
        <h3>Awards and Achivements</h3>
        <div className='skill456'>
          <div className='course_card'>
            <img src={GDSC} alt="Javascript"/>
            <div className='card_body'>
              <h5>GDSC ML-Lead</h5>
            </div>
          </div>
          <div className='course_card'>
            <img src={HashCode} alt="Javascript"/>
            <div className='card_body'>
              <h5>Hash Code</h5>
            </div>
          </div>
          <div className='course_card'>
            <img src={Kickstart} alt="Javascript"/>
            <div className='card_body'>
              <h5>Kick Start</h5>
            </div>
          </div>
          <div className='course_card'>
            <img src={Kotlin} alt="Javascript"/>
            <div className='card_body'>
              <h5>Kotlin</h5>
            </div>
          </div>
          <div className='course_card'>
            <img src={IICC} alt="Javascript"/>
            <div className='card_body'>
              <h5>IICC</h5>
            </div>
          </div>
          <div className='course_card'>
            <img src={GOcrackit} alt="Javascript"/>
            <div className='card_body'>
              <h5>GOcrackit</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About