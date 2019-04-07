import React, { Component } from 'react';
import Results from './Results.js'
import Header from './Header.js';
import Container from './Container';
import styled from 'styled-components'

const ArticleBody = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`

class App extends Component {
  
  render() {
    
    return (
      <div>
        <Header/>
        <ArticleBody>
          <Container/>
        </ArticleBody>
      </div>
    );
  }
}

export default App;
