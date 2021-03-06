import React, { Component } from 'react';
import styled from "styled-components";

let AnswerComp = styled.div`
width: 100%;
height: 100%;
`

let AnswerText = styled.p`
font-size: 20px;
color: white;
`

let Thumbnail = styled.div`
border-radius: 10px;
box-sizing: border-box;
padding: 10px;
margin: 10px;
width: calc(100% - 20px);
height: calc(100% - 20px);
position: relative;
transition: transform .5s;
background-image: url("${props => props.image}");
background-size: cover;
background-position: center;
&:hover, &.active, &.hover {
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
      <Thumbnail data-index={this.props.index} className={`${this.props.active} ${this.props.hover}`} image = { this.props.answerImage }/>
      </AnswerComp>
    );
  }
}

export default Answer;