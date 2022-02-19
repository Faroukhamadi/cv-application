import React, { Component } from 'react';

export default class EducationalExperience extends Component {
  render() {
    return (
      <div className="educational-exp">
        <p>Educational Experience</p>
        <input
          name="university"
          type="text"
          placeholder="University Name"
          onChange={this.props.handleInputChange}
        />
        <input
          name="cityEd"
          type="text"
          placeholder="City"
          onChange={this.props.handleInputChange}
        />
        <input
          name="degree"
          type="text"
          placeholder="Degree"
          onChange={this.props.handleInputChange}
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          onChange={this.props.handleInputChange}
        />
        <input
          name="fromEd"
          type="text"
          placeholder="From"
          onChange={this.props.handleInputChange}
        />
        <input
          name="toEd"
          type="text"
          placeholder="To"
          onChange={this.props.handleInputChange}
        />
        <button>Delete</button>
        <button>Add</button>
      </div>
    );
  }
}
