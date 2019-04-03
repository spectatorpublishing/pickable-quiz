import React, { Component } from 'react';
import Container from './Container';
import Answers from './Answers.js'

class App extends Component {
  
  render() {
    
    return (
      <Header/>
      <div>
        <Container/>
        <Answers/>
      </div>
    );
  }
}

export default App;
