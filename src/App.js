import React, { Component } from 'react';
import Header  from './Header';
class App extends Component {

  render() {
    return (
      <div>
      <Header/>
      <button>Add</button>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Enter Name" id="name" defaultValue="onkar"></input>
      </div>
      </div>
    );
  }
}
export default App;
