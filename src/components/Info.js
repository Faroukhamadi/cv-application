import React, { Component } from 'react';
import '../styles/Info.css';
import EducationalExperience from './EducationalExperience';
import GeneralInformation from './GeneralInformation';
import PracticalExperience from './PracticalExperience';

export default class Info extends Component {
  resetHandler = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  render() {
    return (
      <div className="info">
        <form onSubmit={this.resetHandler}>
          <GeneralInformation
            handleInputChange={this.props.handleInputChange}
          />
          <EducationalExperience
            handleInputChange={this.props.handleInputChange}
          />
          <PracticalExperience
            handleInputChange={this.props.handleInputChange}
          />
        </form>
      </div>
    );
  }
}
