import React from 'react';
import styled from 'styled-components'

const TitleBox = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`
const Title = styled.h1`
  text-align: center;
`

const titleBox = (props) =>{
    return (
        <TitleBox>
          <Title>{props.title}</Title>
          <p>{props.description}</p>
        </TitleBox>
    )
}

export default titleBox