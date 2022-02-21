import '../styles/Footer.css';
import githubLogo from '../images/githubIcon.png';
import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer">
      Copyright © 2022 Faroukhamadi
      <a
        href="https://github.com/Faroukhamadi"
        target="_blank"
        rel="noreferrer"
      >
        <img src={githubLogo} alt="github" />
      </a>
    </div>
  );
};
export default Footer;
