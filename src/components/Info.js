import React from 'react';
import '../styles/Info.css';
import EducationalExperience from './EducationalExperience';
import GeneralInformation from './GeneralInformation';
import PracticalExperience from './PracticalExperience';

const Info = (props) => {
  return (
    <div className="info">
      <form onSubmit={props.resetHandler}>
        <GeneralInformation handleInputChange={props.handleInputChange} />
        <EducationalExperience
          handleInputChange={props.handleInputChange}
          renderHandler={props.renderHandler}
          showEducationalExperience={props.showEducationalExperience}
        />
        <PracticalExperience
          handleInputChange={props.handleInputChange}
          renderHandler={props.renderHandler}
          showPracticalExperience={props.showPracticalExperience}
        />
      </form>
    </div>
  );
};
export default Info;
