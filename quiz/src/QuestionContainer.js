import React, { Component } from 'react';
import styled from "styled-components";
import Question from "./Question";

class QuestionContainer extends Component {
  render() {
    return (
      Array(5).fill(undefined).map(i => <Question/>)
    );
  }
}

export default QuestionContainer;
