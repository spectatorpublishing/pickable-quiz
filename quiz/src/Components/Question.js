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
@media (max-width: 749px) {
  width: 40vw;
  height: 40vw;
}
  ${props => props.hover === "hover" ? "flex-shrink: 0.3" : ""}
`

const AnswersContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 20px;

  @media (max-width: 600px) {
    flex-wrap: nowrap;
  }
`

const PreviewAnswer = styled.div`
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 100;
  text-align: center;
  margin: 0 auto 1.5rem auto;
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
    return <StyledAnswer {...props}
    onClick={this.handleClick}
    onMouseEnter= {()=>this.props.handleMouseEnter(this.props.index)}
    onMouseLeave={()=>this.props.handleMouseLeave()}
    onTouchMove= {this.props.handleTouchMove}
    hover={this.props.hover}>
      <Answer hover={this.props.hover} active={this.props.active} index={this.props.index} answerImage = {this.props.image}>{this.props.children}</Answer>
    </StyledAnswer>
  }
}

class Question extends Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
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

  handleTouchMove(e) {
    var target = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    if (target && target.dataset.index) {
      this.setState(state => {
        let index = parseInt(target.dataset.index);
        if (state.hover !== index) {
          this.props.select(index)
          return {
            hover: index
          }
        }
        else return null
      })
    }
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
              hover={this.state.hover === index ? "hover": "nohover"}
              handleMouseEnter={this.handleMouseEnter} 
              handleMouseLeave = {this.handleMouseLeave}
              handleTouchMove={this.handleTouchMove}
              active={this.props.active === index ? "active": "inactive"}>{i.text}</AnswerClickWrapper>
            })}
          </AnswersContainer>
      </div>
    );
  }
}

export default Question;
