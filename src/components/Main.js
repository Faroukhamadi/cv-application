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
    showEducationalExperience: true,
    showPracticalExperience: true,
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

  renderHandler = (e) => {
    if (e.target.className === 'delete-btnPr') {
      this.setState({
        showPracticalExperience: false,
      });
    } else if (e.target.className === 'delete-btnEd') {
      this.setState({
        showEducationalExperience: false,
      });
    } else if (e.target.className === 'add-btnPr') {
      this.setState({
        showPracticalExperience: true,
      });
    } else if (e.target.className === 'add-btnEd') {
      this.setState({
        showEducationalExperience: true,
      });
    }
    console.log('Practical' + this.state.showPracticalExperience);
    console.log('Educational' + this.state.showEducationalExperience);
  };

  render() {
    return (
      <div className="main">
        <Info
          {...this.state}
          handleInputChange={this.handleInputChange}
          resetHandler={this.resetHandler}
          renderHandler={this.renderHandler}
          showEducationalExperience={this.state.showEducationalExperience}
          showPracticalExperience={this.state.showPracticalExperience}
        />
        <Preview {...this.state} />
      </div>
    );
  }
}
