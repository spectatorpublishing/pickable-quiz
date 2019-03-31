import React, { Component } from 'react';
import Answers from './Answers.js';
import Header from './Header.js';

class App extends Component {
  
  render() {
    
    return (
      <Header/>
      <div>
        <QuestionContainer/>
        <Answers answerImage = { "./testImage.jpeg" } text = { "Netflix And Chill" }></Answers>
      </div>
    );
  }
}

export default App;
