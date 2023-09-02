import React from 'react';
import PageHeader from './PageHeader';
import {FaIdBadge} from 'react-icons/fa';
import './Skills.css';
import Footer from './Footer';
import {TbBrandJavascript} from 'react-icons/tb';
import {FaJava, FaPython, FaHtml5,FaCss3Alt, FaReact, FaNode, FaAndroid, FaDatabase} from 'react-icons/fa';
import {SiKotlin, SiAndroidstudio, SiJupyter, SiAnaconda} from 'react-icons/si';
import {DiVisualstudio} from 'react-icons/di';

const n =130;

const Skills = () => {
  return (
    <section id="skills" className="skills">
    <PageHeader headerText="My Skills" 
    icon={<FaIdBadge size={30}/>}/>

    <div className='skill123'>
      <h3>Programming Language</h3>
      <div className='skill'>
        <div class="box"><FaReact size={n}/></div>
        <div class="box"><FaHtml5 size={n}/></div>
        <div class="box"><FaCss3Alt size={n}/></div>
        <div class="box"><SiKotlin size={n}/></div>
        <div class="box"><FaAndroid size={n}/></div>
        <div class="box"><TbBrandJavascript size={n}/></div>
        <div class="box"><FaJava size={n}/></div>
        <div class="box"><FaPython size={n}/></div>
        <div class="box"><FaNode size={n}/></div>
        <div class="box"><FaDatabase size={n}/></div>
      </div>
      <h3>Tools</h3>
      <div className='skill2'>
        <div class="box"><SiAndroidstudio size={n}/></div>
        <div class="box"><DiVisualstudio size={n}/></div>
        <div class="box"><SiJupyter size={n}/></div>
        <div class="box"><SiAnaconda size={n}/></div>
      </div>
    </div>
    <br></br>
    <Footer/>
  </section>
  )
}

export default Skills