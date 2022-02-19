import React, { Component } from 'react';
import '../styles/Info.css';
import EducationalExperience from './EducationalExperience';
import GeneralInformation from './GeneralInformation';
import PracticalExperience from './PracticalExperience';

export default class Info extends Component {
  render() {
    return (
      <div className="info">
        <GeneralInformation />
        <EducationalExperience />
        <PracticalExperience />
      </div>
    );
  }
}
