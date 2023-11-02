import React, { Component } from 'react';
class App extends Component {

  render() {
    return (
      <div>
        {/* <div className="header">
          Phone Directory
        </div>
        <button>Add</button>
        <div>
          <span>Name</span><br />
          <span>Phone</span>
        </div> */}
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Enter Name" id="name" defaultValue="onkar"></input>
      </div>
    );
  }
}
export default App;
