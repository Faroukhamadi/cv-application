import React from 'react';

const practicalExperience = (props) => {
  return (
    <div className="practical-exp">
      <p>Practical Experience</p>
      {props.showPracticalExperience && (
        <>
          <input
            // value={props.position}
            name="position"
            type="text"
            onChange={props.handleInputChange}
            placeholder="Position"
          />
          <input
            // value={props.company}
            name="company"
            type="text"
            onChange={props.handleInputChange}
            placeholder="Company"
          />
          <input
            name="cityPr"
            type="text"
            onChange={props.handleInputChange}
            placeholder="City"
          />
          <input
            name="fromPr"
            type="text"
            onChange={props.handleInputChange}
            placeholder="From"
          />
          <input
            name="toPr"
            type="text"
            onChange={props.handleInputChange}
            placeholder="To"
          />
        </>
      )}
      <button className="delete-btnPr" onClick={props.renderHandler}>
        Delete
      </button>
      <button className="add-btnPr" onClick={props.renderHandler}>
        Add
      </button>
      <button type="submit" className="reset-btn">
        Reset
      </button>
    </div>
  );
};
export default practicalExperience;
