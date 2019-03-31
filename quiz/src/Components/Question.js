import styled from "styled-components";
import React from 'react';
import Answers from '../Answers'
import QuestionBox from './QuestionBox'

const AnswerBox = styled.div`
  width: 90%;
  margin: 10px;
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
 
const question = (props) => {
	const answerBox = props.data.answers.map( data =>{
		return <Answers text = {data.answer} answerImage = {data.img}/>
	})

	return (	
		<div>
		<QuestionBox question = {props.data.question}/>
		<AnswerBox>
			{answerBox}
		</AnswerBox>
		</div>
	)
}

export default question;
