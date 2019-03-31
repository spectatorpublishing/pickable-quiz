import React, { Component } from 'react';
import styled from "styled-components";

let AnswerComp = styled.div`
background-color: red;
width: 300px;
height: 300px;
position:relative;
text-align: center;
`

let AnswerText = styled.p`
font-size: 20px;
color: white;
`
let Thumbnail = styled.img`
margin: 10px;
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
      <AnswerText>{ this.props.text }</AnswerText><Thumbnail src = { this.props.answerImage }></Thumbnail>
      </AnswerComp>
    );
  }
}

export default Answer;