import React, { Component } from 'react';
export default class EducationalExperience extends Component {
  render() {
    return (
      <div className="educational-exp">
        <p>Educational Experience</p>
        <input type="text" placeholder="University Name" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Degree" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <button>Delete</button>
        <button>Add</button>
      </div>
    );
  }
}
