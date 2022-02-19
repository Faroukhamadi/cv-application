import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
export default class App extends Component {
  render() {
    return (
      <div id="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
