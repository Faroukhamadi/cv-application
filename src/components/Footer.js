import React, { Component } from 'react';
import '../styles/Footer.css';
import githubLogo from '../images/githubIcon.png';

export default class Footer extends Component {
  render() {
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
  }
}
