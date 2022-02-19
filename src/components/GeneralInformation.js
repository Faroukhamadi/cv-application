import React, { Component } from 'react';

export default class GeneralInformation extends Component {
  render() {
    return (
      <div className="general-info">
        <p>General Information</p>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Photo" readOnly />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Description" />
      </div>
    );
  }
}
