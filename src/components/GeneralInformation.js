import React, { Component } from 'react';

export default class GeneralInformation extends Component {
  render() {
    return (
      <div className="general-info">
        <p>General Information</p>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={this.props.handleInputChange}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={this.props.handleInputChange}
        />
        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={this.props.handleInputChange}
        />
        <input
          // TODO: handle the photo
          type="text"
          placeholder="Photo"
          readOnly
          onChange={this.props.handleInputChange}
        />
        <input
          name="address"
          type="text"
          placeholder="Address"
          onChange={this.props.handleInputChange}
        />
        <input
          name="phoneNumber"
          type="text"
          placeholder="Phone Number"
          onChange={this.props.handleInputChange}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          onChange={this.props.handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={this.props.handleInputChange}
        />
      </div>
    );
  }
}
