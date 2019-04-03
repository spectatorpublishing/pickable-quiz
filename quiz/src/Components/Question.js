import React, { Component } from 'react';
import styled from "styled-components";

const qdiv =  styled.div`

`

class AnswerClickWrapper extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.onClick(this.props.type)
  }

  render() {
    return <div onClick={this.handleClick}>{this.props.children}</div>
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
          <div>{this.props.questionData.questionText}</div>
          <div>
            {this.props.questionData.answers.map((i, index) => {
              return <AnswerClickWrapper type={i.type} onClick={this.handleClick}>{i.text}</AnswerClickWrapper>
            })}
          </div>
      </div>
    );
  }
}

export default Question;
