import React, { Component } from 'react';
import Container from './Container';
import Answers from './Answers.js'
import styled from 'styled-components'

const ArticleBody = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`

class App extends Component {
  
  render() {
    
    return (
      <ArticleBody>
        <Container/>
      </ArticleBody>
    );
  }
}

export default App;
