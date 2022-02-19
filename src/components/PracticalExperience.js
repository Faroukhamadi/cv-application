import React, { Component } from 'react';

export default class PracticalExperience extends Component {
  render() {
    return (
      <div className="practical-exp">
        <p>Practical Experience</p>
        <input
          value={this.props.position}
          name="position"
          type="text"
          onChange={this.props.handleInputChange}
          placeholder="Position"
        />
        <input
          value={this.props.company}
          name="company"
          type="text"
          onChange={this.props.handleInputChange}
          placeholder="Company"
        />
        <input
          name="cityPr"
          type="text"
          onChange={this.props.handleInputChange}
          placeholder="City"
        />
        <input
          name="fromPr"
          type="text"
          onChange={this.props.handleInputChange}
          placeholder="From"
        />
        <input
          name="toPr"
          type="text"
          onChange={this.props.handleInputChange}
          placeholder="To"
        />
        <button>Delete</button>
        <button>Add</button>
        <button type="submit" className="reset-btn">
          Reset
        </button>
      </div>
    );
  }
}
