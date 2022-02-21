import React from 'react';

const GeneralPrev = (props) => {
  return (
    <div className="general-prev">
      <h4>Description</h4>
      <hr />
      <p>{props.description}</p>
      <h4>Experience</h4>
      <hr />
      <p>
        {props.fromPr} - {props.toPr}
      </p>
      <p>{props.position}</p>
      <p>
        {props.company}, {props.cityPr}
      </p>
      <h4>Education</h4>
      <hr />
      <p>
        {props.fromEd} - {props.toEd}
      </p>
      <p>
        {props.university}, {props.cityEd}
      </p>
      <p>Degree: {props.degree}</p>
      <p>Subject: {props.subject}</p>
    </div>
  );
};

export default GeneralPrev;
