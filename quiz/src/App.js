import React, { Component } from 'react';
import QuestionContainer from './QuestionContainer';
import Answers from './Answers.js'

class App extends Component {
  render() {
    return (
      <div>
        <QuestionContainer/>
        <Answers/>
      </div>
    );
  }
}

export default App;
