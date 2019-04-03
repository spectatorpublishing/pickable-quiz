import React, { Component } from 'react';
<<<<<<< HEAD
// import QuestionContainer from './QuestionContainer';
// import Answers from './Answers.js'
import Results from './Results.js'
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
      <Results title = "Lorem ipsum dolor" imgAlt = "" description = "Lorem ipsum dolor sit amet, eam no doming oportere. Et virtute explicari mei, vix no salutandi moderatius complectitur, cu omnium."/>
    );
  }
}

export default App;
