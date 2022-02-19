import React, { Component } from 'react';

export default class PracticalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="practical-exp">
        <p>Practical Experience</p>
        <input name="position" type="text" placeholder="Position" />
        <input name="company" type="text" placeholder="Company" />
        <input name="city" type="text" placeholder="City" />
        <input name="from" type="text" placeholder="From" />
        <input name="to" type="text" placeholder="To" />
        <button>Delete</button>
        <button>Add</button>
        <button className="reset-btn">Reset</button>
      </div>
    );
  }
}
