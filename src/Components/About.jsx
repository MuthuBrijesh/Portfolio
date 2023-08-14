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
import Pic from '../Assets/pic2.png';
import Pic1 from '../Assets/pic3.png';
import Footer from './Footer';
import { BiIdCard ,BiSolidFilePdf } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { FaIdCardAlt } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import Resume from '../Assets/MuthuBrijesh.pdf';


const About = () => {
  
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me"
        icon={<BsPersonFill size={40} />} />
      <div className='grid123'>

        <div className='aboutme'>
          <div className='personal_content'>
            <Animate play duration={1.5} delay={0}
              start={{ transform: "translateX(-900px)", }}
              end={{ transform: "translateX(0px)", }}>
              <div className='about_content'>
                <h3>Get to know me!</h3>
                <p><span style={{ fontWeight: 'bold' }}>Hi again, I'am Muthu Brijesh</span>, I am doing my final year of B.E in Computer Science and Engineering from Ramco Institute of Technology .
                  My educational journey has equipped me with strong analytical, logical, and creative skills that I'm eager to apply in the professional world.
                  Throughout my academic career, I developed a keen interest in Full Stack Web Development, Mobile App Development, and Machine Learning.</p>
              </div>
            </Animate>
          </div>


          <div className='service_content'>
            <div className='about_personal'>
              <img src={Pic} alt="Picture123" style={{ height: 250 }} />
            </div>
          </div>
        </div>


        <div className='aboutme'>
          <div className='service_content'>
            <div className='about_personal'>
              <img src={Pic1} alt="Picture123" style={{ height: 400 }} />
            </div>
          </div>
          <div className='personal_content1'>
            <div className='about_content'>
              <Animate play duration={1.5} delay={0}
                start={{ transform: "translateX(900px)", }}
                end={{ transform: "translateX(0px)", }}>
                <h3>Personal Data</h3>
                <p><span style={{ fontWeight: 'bold' }}><FaIdCardAlt style={{ marginRight: 10 }} /></span> Muthu Brijesh<p/>
                  <span style={{ fontWeight: 'bold' }}><MdOutlineEmail style={{ marginRight: 10 }} /></span> muthubrijeshramasamy20@gmail.com<p/>
                  <span style={{ fontWeight: 'bold' }}><BsTelephone style={{  marginRight: 10 }} /></span> 7502717171<p/>
                  <span style={{ fontWeight: 'bold' }}><BiIdCard style={{  marginRight: 10 }} /></span> Rajapalayam, Tamilnadu<p/>
                  <span style={{ fontWeight: 'bold' }}><GrLocation style={{ marginRight: 10 }} /></span> India
                  </p>
                  <a
                    href={Resume}
                    download="Muthu Brijesh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className='button10'>Download CV <BiSolidFilePdf/> </button>
                  </a>
              </Animate>
            </div>
          </div>
        </div>
      </div>



      {/*<div className='aboutme2'>
        <h3>Online Courses</h3>
        <div className='skill456'>
          <div className='new'>
            <div className='course_card'>
              <img src={JS} alt="Javascript" />
              <div className='card_body'>
                <h5>Javascript</h5>
              </div>
            </div>
          </div>
          <div className='new'>
            <div className='course_card'>
              <img src={ReactCert} alt="Javascript" />
              <div className='card_body'>
                <h5>React</h5>
              </div>
            </div>
          </div>
          <div className='new'>
            <div className='course_card'>
              <img src={HTML} alt="Javascript" />
              <div className='card_body'>
                <h5>HTML</h5>
              </div>
            </div>
          </div>
          <div className='new'>
            <div className='course_card'>
              <img src={Android} alt="Javascript" />
              <div className='card_body'>
                <h5>Android</h5>
              </div>
            </div>
          </div>
          <div className='new'>
            <div className='course_card'>
              <img src={Java} alt="Javascript" />
              <div className='card_body'>
                <h5>Java</h5>
              </div>
            </div>
          </div>
          <div className='new'>
            <div className='course_card'>
              <img src={Linked} alt="Javascript" />
              <div className='card_body'>
                <h5>Linked List</h5>
              </div>
            </div>
          </div>
        </div>
  </div>*/}


      <div className='aboutme2'>
        <h3>Awards and Achivements</h3>
        <div className='skill456'>
          <div className='new'>
            <div className='course_card'>
              <img src={GDSC} alt="Javascript" />
              <div className='card_body'>
                <h5>GDSC ML-Lead</h5>
              </div>
            </div>
          </div>
          <div className='new'>
            <div className='course_card'>
              <img src={HashCode} alt="Javascript" />
              <div className='card_body'>
                <h5>Hash Code</h5>
              </div>
            </div>
          </div>
          <div className='new'>
            <div className='course_card'>
              <img src={Kickstart} alt="Javascript" />
              <div className='card_body'>
                <h5>Kick Start</h5>
              </div>
            </div>
          </div>
          <div className='new'>
            <div className='course_card'>
              <img src={Kotlin} alt="Javascript" />
              <div className='card_body'>
                <h5>Kotlin</h5>
              </div>
            </div>
          </div>
          <div className='new'>
            <div className='course_card'>
              <img src={IICC} alt="Javascript" />
              <div className='card_body'>
                <h5>IICC</h5>
              </div>
            </div>
          </div>
          <div className='new'>
            <div className='course_card'>
              <img src={GOcrackit} alt="Javascript" />
              <div className='card_body'>
                <h5>GOcrackit</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default About