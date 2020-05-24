import React, { Component } from 'react';

import { getRandomNumber }  from './Helper/utils';

import './App.css';

class App extends Component {
  constructor( props ){
    super( props );
    
    this.state  = {
      winingNumber      : getRandomNumber(),
      tickets           : [],
      remainingTickets  : 5,
      finished          : false
    };
  };
  
  render() {
    return (
      <div className= 'App'>
        <h1>Hello</h1>
      </div>
   );
  }
}

export default App;
