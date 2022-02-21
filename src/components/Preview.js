import React from 'react';
import GeneralPrev from './GeneralPrev';
import HeaderPrev from './HeaderPrev';
import PersonalPrev from './PersonalPrev';
import '../styles/Preview.css';

const Preview = (props) => {
  return (
    <div className="preview">
      <HeaderPrev {...props} />
      <GeneralPrev {...props} />
      <PersonalPrev {...props} />
    </div>
  );
};

export default Preview;
