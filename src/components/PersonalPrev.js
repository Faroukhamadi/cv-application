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
        <p>Rue chaambi Fahou 1</p>
        <p>Phone Number</p>
        <p>50 431 296</p>
        <p>Email</p>
        <p>faroukhamadi1@outlook.com</p>
      </div>
    );
  }
}
