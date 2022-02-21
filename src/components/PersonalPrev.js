import avatar from '../images/empty-avatar.png';
import React from 'react';

const PersonalPrev = (props) => {
  return (
    <div className="personal-prev">
      <img src={avatar} alt="placeholder" />
      <h3>Personal Details</h3>
      <hr />
      <p>Address</p>
      <p>{props.address}</p>
      <p>Phone Number</p>
      <p>{props.phoneNumber}</p>
      <p>Email</p>
      <p>{props.email}</p>
    </div>
  );
};

export default PersonalPrev;
