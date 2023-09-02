import React from 'react';
import "./PageHeader.css";

const PageHeader = (props) => {
    const { headerText, icon } = props;
  return (
    <div className='wrapper'>
        <h2>{headerText}</h2>
    </div>
  )
}

export default PageHeader;