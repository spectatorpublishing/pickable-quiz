import React, { Component } from 'react';
import styled from "styled-components";

let AnswerComp = styled.div`
background-color: red;
width: 300px;
height: 300px;
`
let thumbnail = styled.img`
src: "./testImage.jpeg";
`

class Answer extends Component {
  render() {
    return (
      <AnswerComp>
      <thumbnail/>WHOA
      </AnswerComp>
    );
  }
}

export default Answer;