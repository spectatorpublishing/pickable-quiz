import React, { Component } from 'react';
<<<<<<< HEAD
import QuestionContainer from './QuestionContainer';
import Answers from './Answers.js'
import Results from './Results.js'
import Header from './Header.js';
=======
import Container from './Container';
import Answers from './Answers.js'
import styled from 'styled-components'

const ArticleBody = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`
>>>>>>> 95c1e76841e84c4cf36361186b40d4d16835657b

class App extends Component {
  
  render() {
    
    return (
<<<<<<< HEAD
      <div>
      <Header/>
      <div>
        <QuestionContainer/>
        <Answers answerImage = { "./testImage.jpeg" } text = { "Netflix And Chill" }></Answers>
      </div>
      <Results title = "Lorem ipsum dolor" imgAlt = "" description = "Lorem ipsum dolor sit amet, eam no doming oportere. Et virtute explicari mei, vix no salutandi moderatius complectitur, cu omnium."/>
      </div>
=======
      <ArticleBody>
        <Container/>
      </ArticleBody>
>>>>>>> 95c1e76841e84c4cf36361186b40d4d16835657b
    );
  }
}

export default App;
