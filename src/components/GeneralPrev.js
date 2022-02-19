import React, { Component } from 'react';

export default class GeneralPrev extends Component {
  render() {
    return (
      <div className="general-prev">
        <h4>Description</h4>
        <hr />
        <p>{this.props.description}</p>
        <h4>Experience</h4>
        <hr />
        <p>
          {this.props.fromPr} - {this.props.toPr}
        </p>
        <p>{this.props.position}</p>
        <p>
          {this.props.company}, {this.props.cityPr}
        </p>
        <h4>Education</h4>
        <hr />
        <p>
          {this.props.fromEd} - {this.props.toEd}
        </p>
        <p>
          {this.props.university}, {this.props.cityEd}
        </p>
        <p>Degree: {this.props.degree}</p>
        <p>Subject: {this.props.subject}</p>
      </div>
    );
  }
}
