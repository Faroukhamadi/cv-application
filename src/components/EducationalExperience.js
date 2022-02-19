import React, { Component } from 'react';

export default class EducationalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      university: '',
      city: '',
      degree: '',
      subject: '',
      from: '',
      to: '',
    };
  }

  handleInputChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="educational-exp">
        <p>Educational Experience</p>
        <input
          name="university"
          type="text"
          placeholder="University Name"
          onChange={this.handleInputChange}
        />
        <input
          name="city"
          type="text"
          placeholder="City"
          onChange={this.handleInputChange}
        />
        <input
          name="degree"
          type="text"
          placeholder="Degree"
          onChange={this.handleInputChange}
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          onChange={this.handleInputChange}
        />
        <input
          name="from"
          type="text"
          placeholder="From"
          onChange={this.handleInputChange}
        />
        <input
          name="to"
          type="text"
          placeholder="To"
          onChange={this.handleInputChange}
        />
        <button>Delete</button>
        <button>Add</button>
      </div>
    );
  }
}
