import React, { Component } from 'react';
import GeneralPrev from './GeneralPrev';
import HeaderPrev from './HeaderPrev';
import PersonalPrev from './PersonalPrev';
import '../styles/Preview.css';

export default class Preview extends Component {
  render() {
    return (
      <div className="preview">
        <HeaderPrev {...this.props} />
        <GeneralPrev {...this.props} />
        <PersonalPrev {...this.props} />
      </div>
    );
  }
}
