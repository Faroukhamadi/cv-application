import React, { Component } from 'react';

const GeneralInformation = (props) => {
  return (
    <div className="general-info">
      <p>General Information</p>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        placeholder="Photo"
        readOnly
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={props.handleInputChange}
      />
      <textarea
        type="text"
        name="description"
        placeholder="Description"
        onChange={props.handleInputChange}
      />
    </div>
  );
};

export default GeneralInformation;
