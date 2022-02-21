import React, { Component } from 'react';

const HeaderPrev = (props) => {
  return (
    <div className="header-prev">
      <h1 id="first-name">
        {props.firstName} {props.lastName}
      </h1>
      <h2 id="title">{props.title}</h2>
    </div>
  );
};

export default HeaderPrev;
