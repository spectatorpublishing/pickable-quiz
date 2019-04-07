import React, { Component } from 'react';
import styled from "styled-components";

const StyledQuestion = styled.div`
  font-size: 2rem;
  margin-top: 1rem;
  font-weight: 100;
`

const StyledAnswer = styled.div`
  font-weight: ${props => props.index === props.active ? 700 : 100};
`

class AnswerClickWrapper extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.onClick(this.props.index)
  }

  render() {
    return <StyledAnswer {...this.props} onClick={this.handleClick}>{this.props.children}</StyledAnswer>
  }
}

class Question extends Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(i) {
    this.props.select(i)
  }

  render() {
    return (
      <div>
          <StyledQuestion>{this.props.questionData.questionText}</StyledQuestion>
          <div>
            {this.props.questionData.answers.map((i, index) => {
              return <AnswerClickWrapper {...this.props} index={index} onClick={this.handleClick}>{i.text}</AnswerClickWrapper>
            })}
          </div>
      </div>
    );
  }
}

export default Question;
