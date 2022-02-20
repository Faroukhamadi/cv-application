import React, { Component } from 'react';
import '../styles/Main.css';
import Info from './Info';
import Preview from './Preview';

export default class Main extends Component {
  state = {
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
    university: '',
    cityEd: '',
    degree: '',
    subject: '',
    fromEd: '',
    toEd: '',
    position: '',
    company: '',
    cityPr: '',
    fromPr: '',
    toPr: '',
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };

  resetHandler = (e) => {
    e.preventDefault();
    e.target.reset();
    this.setState({
      firstName: '',
      lastName: '',
      title: '',
      address: '',
      phoneNumber: '',
      email: '',
      description: '',
      university: '',
      cityEd: '',
      degree: '',
      subject: '',
      fromEd: '',
      toEd: '',
      position: '',
      company: '',
      cityPr: '',
      fromPr: '',
      toPr: '',
    });
  };

  render() {
    return (
      <div className="main">
        <Info
          {...this.state}
          handleInputChange={this.handleInputChange}
          resetHandler={this.resetHandler}
        />
        <Preview {...this.state} />
      </div>
    );
  }
}
