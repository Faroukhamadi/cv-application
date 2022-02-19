import React, { Component } from 'react';

export default class GeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      title: '',
      address: '',
      phoneNumber: '',
      email: '',
      description: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
    console.log(name);
  }

  render() {
    return (
      <div className="general-info">
        <p>General Information</p>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={this.handleInputChange}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={this.handleInputChange}
        />
        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={this.handleInputChange}
        />
        <input
          // TODO: handle the photo
          type="text"
          placeholder="Photo"
          readOnly
          onChange={this.handleInputChange}
        />
        <input
          name="address"
          type="text"
          placeholder="Address"
          onChange={this.handleInputChange}
        />
        <input
          name="phoneNumber"
          type="text"
          placeholder="Phone Number"
          onChange={this.handleInputChange}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          onChange={this.handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
