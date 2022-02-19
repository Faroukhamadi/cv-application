import React, { Component } from 'react';

export default class PracticalExperience extends Component {
  render() {
    return (
      <div>
        <p>Practical Experience</p>
        <input type="text" placeholder="Position" />
        <input type="text" placeholder="Company" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <button>Delete</button>
        <button>Add</button>
        <button>Reset</button>
      </div>
    );
  }
}
