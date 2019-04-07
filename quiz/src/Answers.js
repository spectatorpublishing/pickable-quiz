import React, { Component } from 'react';
import styled from "styled-components";

let AnswerComp = styled.div`
text-align: center;
`

let AnswerText = styled.p`
font-size: 20px;
color: white;
`

let Thumbnail = styled.img`
box-sizing: border-box;
padding: 10px;
width: 100%;
position: relative;
transition: transform .5s;
&:hover{
  transform: scale(1.1);
  background-color: white;
}
`

class Answer extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <AnswerComp>
      <Thumbnail src = { this.props.answerImage }></Thumbnail>
      </AnswerComp>
    );
  }
}

export default Answer;