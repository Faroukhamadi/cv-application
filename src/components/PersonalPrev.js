import React, { Component } from 'react';
import avatar from '../images/empty-avatar.png';

export default class PersonalPrev extends Component {
  render() {
    return (
      <div className="personal-prev">
        <img src={avatar} alt="placeholder" />
        <h3>Personal Details</h3>
        <hr />
        <p>Address</p>
        <p>{this.props.address}</p>
        <p>Phone Number</p>
        <p>{this.props.phoneNumber}</p>
        <p>Email</p>
        <p>{this.props.email}</p>
      </div>
    );
  }
}
