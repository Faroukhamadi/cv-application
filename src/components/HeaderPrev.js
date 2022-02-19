import React, { Component } from 'react';

export default class HeaderPrev extends Component {
  render() {
    return (
      <div className="header-prev">
        <h1 id="first-name">
          {this.props.firstName} {this.props.lastName}
        </h1>
        <h2 id="title">{this.props.title}</h2>
      </div>
    );
  }
}
