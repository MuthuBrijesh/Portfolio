import React from 'react';
import PageHeader from './PageHeader';
import {HiDocumentText} from 'react-icons/hi';

const Resume = () => {
  return (
    <section id="resume" className="resume">
    <PageHeader headerText="Resume" 
    icon={<HiDocumentText size={40}/>}/>
  </section>
  )
}

export default Resume