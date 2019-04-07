import React, { Component } from 'react';
import QuestionContainer from './QuestionContainer';
import Answers from './Answers.js'
import Results from './Results.js'
import Header from './Header.js';
import Container from './Container';
import styled from 'styled-components'

const ArticleBody = styled.div`
  margin: 0 auto;
`

class App extends Component {
  
  render() {
    
    return (
      <div>
      <Header/>
      <div>
        <QuestionContainer/>
        <Answers answerImage = { "./testImage.jpeg" } text = { "Netflix And Chill" }></Answers>
      </div>
      <Results title = "Lorem ipsum dolor" imgAlt = "" description = "Lorem ipsum dolor sit amet, eam no doming oportere. Et virtute explicari mei, vix no salutandi moderatius complectitur, cu omnium."/>
      </div>
      <ArticleBody>
        <Container/>
      </ArticleBody>
      <Answers/>
    );
  }
}

export default App;
