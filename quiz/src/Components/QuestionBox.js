import React from 'react';
import styled from 'styled-components'

const QuestionBox = styled.div`
  background: #62A8E5;
  color: white;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`

const questionBox = (props) =>{
    return (
        <QuestionBox>
          {props.question}
        </QuestionBox>
    )
}

export default questionBox