import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import img from './testbackground.jpg'

const Wrapper = styled.header`
    min-height: 30vh;
    display: flex;
    align-content: flex-start;
    justify-content: center;
    flex-wrap: wrap

    /* position: relative;
    background-color: #343a40;
    background: url(${img}) no-repeat center center;
    background-size: cover; */
`

const Title = styled.h1`
    width: 100%;
    font-family: 'Lato', sans-serif;
    text-align: center;
    font-size: 3rem;
`

const Paragraph = styled.div`
    width: 100%;
    font-family: 'Lato', sans-serif;
    text-align: center;
    padding: 1% 30% 0 30%;
    font-size: 1.2rem
`
const Dividebar = styled.hr`
    border: 0.1rem solid #f75189;
    width: 10%;
`

const Pinktext = styled.span`
    color: #f30354;
`

class Header extends Component {

    render() {
        return (
            <Wrapper>
                <Title>
                    What should <Pinktext>your</Pinktext> next date be?
                </Title>
                <Dividebar></Dividebar>
                <Paragraph>
                    Looking for a fun date but you’re totally out of ideas? Take this quiz to see what date you should go on based on your likes, dislikes, and interests! Fun options lie ahead!
                </Paragraph>
            </Wrapper>
            
        )
    }
}

export default Header;