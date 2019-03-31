import React, { Component } from 'react';
import styled from "styled-components";

let Answer = styled.div`
background-color: "grey",
height: "15em",
width: "15em"
`
class AnswerBox extends Component{
    render() {
        return (
            <Answer>
                Hello<img src = "Harold.jpg"/>
            <Answer/>
        );
    }
}

export default AnswerBox