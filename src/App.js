import React, { Component } from 'react';
import Header from './Header';
class App extends Component {

  render() {
    var subscribers = [
      {
        id:1,
        name:'onkar',
        phone:'7647484884'
      },
      {
        id:2,
        name:'varad',
        phone:'37678734'
      }
    ]
    return (
      <div>
        <Header />
       
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            subscribers.map(sub=>{
              return <div key={sub.id} className='grid-container'>
                <span className='grid-item'>{sub.name}</span>
                <span className='grid-item'>{sub.phone}</span>
              </div>
            })
          }
        
         
        </div>
      </div>
    );
  }
}
export default App;
