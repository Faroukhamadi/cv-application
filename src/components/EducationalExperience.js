import React from 'react';

const EducationalExperience = (props) => {
  return (
    <div className="educational-exp">
      <p>Educational Experience</p>
      {props.showEducationalExperience && (
        <>
          <input
            name="university"
            type="text"
            placeholder="University Name"
            onChange={props.handleInputChange}
          />
          <input
            name="cityEd"
            type="text"
            placeholder="City"
            onChange={props.handleInputChange}
          />
          <input
            name="degree"
            type="text"
            placeholder="Degree"
            onChange={props.handleInputChange}
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            onChange={props.handleInputChange}
          />
          <input
            name="fromEd"
            type="text"
            placeholder="From"
            onChange={props.handleInputChange}
          />
          <input
            name="toEd"
            type="text"
            placeholder="To"
            onChange={props.handleInputChange}
          />
        </>
      )}
      <button className="delete-btnEd" onClick={props.renderHandler}>
        Delete
      </button>
      <button className="add-btnEd" onClick={props.renderHandler}>
        Add
      </button>
    </div>
  );
};

export default EducationalExperience;
