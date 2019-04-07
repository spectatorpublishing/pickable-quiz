import React, { Component } from 'react';
import styled from "styled-components";
import Answer from "../Answers.js";

const StyledQuestion = styled.div`
  font-size: 2rem;
  margin-top: 1rem;
  font-weight: 100;
  display: block;
  max-width: 80rem;
  text-align: center;
  margin: 2rem auto;
`

const StyledAnswer = styled.div`
box-sizing: border-box;
  font-weight: ${props => props.index === props.active ? 700 : 100};
`

const AnswersContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
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
    return <StyledAnswer {...this.props} onClick={this.handleClick}
    onMouseEnter= {()=>this.props.handleMouseEnter(this.props.index)}
    onMouseLeave={()=>this.props.handleMouseLeave()}>
      <Answer answerImage = {this.props.image}>{this.props.children}</Answer>
    </StyledAnswer>
  }
}

class Question extends Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.state = {
      hover: -1
    }
  }

  handleClick(i) {
    this.props.select(i)
  }

  handleMouseEnter(i){
    this.setState({
      hover: i
    })
  }

  handleMouseLeave(){
    this.setState({
      hover: -1
    })
  }

  render() {
    return (
      <div>
          <StyledQuestion>{this.props.questionData.questionText}</StyledQuestion>
          <AnswersContainer>
            {this.props.questionData.answers.map((i, index) => {
              return <AnswerClickWrapper {...i} index={index} onClick={this.handleClick}
              hover={this.state.hover}
              handleMouseEnter={this.handleMouseEnter} 
              handleMouseLeave = {this.handleMouseLeave}>{i.text}</AnswerClickWrapper>
            })}
          </AnswersContainer>
      </div>
    );
  }
}

export default Question;
