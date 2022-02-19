import React, { Component } from 'react';
import '../styles/Main.css';
import Info from './Info';
import Preview from './Preview';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Info />
        <Preview />
      </div>
    );
  }
}
