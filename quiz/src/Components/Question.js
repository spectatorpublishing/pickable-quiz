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
  margin: 2rem auto 1rem auto;
`

const StyledAnswer = styled.div`
  box-sizing: border-box;
  width: 250px;
  height: 250px;
`

const AnswersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const PreviewAnswer = styled.div`
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 100;
  text-align: center;
  margin: 0 auto 1rem auto;
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
    let {type, ...props} = this.props
    return <StyledAnswer {...props} onClick={this.handleClick}
    onMouseEnter= {()=>this.props.handleMouseEnter(this.props.index)}
    onMouseLeave={()=>this.props.handleMouseLeave()}>
      <Answer active={this.props.active} answerImage = {this.props.image}>{this.props.children}</Answer>
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
    let answer = this.props.questionData.answers.filter((_, index) => 
      index===this.state.hover
    )

    if (this.state.hover === -1){
      answer = this.props.questionData.answers.filter((_, index) => 
        index===this.props.active
      )
    }

    answer = answer.length ? <PreviewAnswer>{answer[0].text}</PreviewAnswer>: <PreviewAnswer/>

    return (
      <div>
          <StyledQuestion>{this.props.questionData.questionText}</StyledQuestion>
          {answer}
          <AnswersContainer>
            {this.props.questionData.answers.map((i, index) => {
              return <AnswerClickWrapper {...i} index={index} onClick={this.handleClick}
              hover={this.state.hover}
              handleMouseEnter={this.handleMouseEnter} 
              handleMouseLeave = {this.handleMouseLeave}
              active={this.props.active === index ? "active": "inactive"}>{i.text}</AnswerClickWrapper>
            })}
          </AnswersContainer>
      </div>
    );
  }
}

export default Question;
