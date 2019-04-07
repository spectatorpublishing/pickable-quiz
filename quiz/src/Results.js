import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
flex: 1;
flex-direction: column;
background-color: #EC2058;
justify-content: center;
width: 70vw;
margin: auto;
height: 300px;
padding: 20px;
border-radius: 10px;
`

const Title = styled.div`
text-align: center;
margin-bottom: 20px;
padding: 10px;
width: 100%;
color: white;
font-size: 2rem;
font-weight: bold;
`

const PictureContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: auto;
`

const ImageContainer = styled.div`
height: 200px;
width: 50%;
background-image: url("${props => props.image}");
border-radius: 10px;
`

const CaptionContainer = styled.div`
width: 50%;
padding: 15px;
flex: 1;
flex-direction: column;
align-items: center;
color: white;
`

const Description = styled.div`
height: 50%;
padding: 0 15px 20px 15px;
width: 100%;
font-size: 1rem;
`

const ButtonContainer = styled.div`
height: 40%;
display: block;
`

const Pickable = styled.button`
  background-color:transparent;
  -moz-border-radius:10px;
  -webkit-border-radius:10px;
  border-radius:10px;
  border:4px solid #ffffff;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:19px;
  padding: 10px;
  width: 80%;
  margin: auto;
  text-decoration:none;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  display: block;
  &:hover{
    width: 90%;
    padding: 20px;

  }
`

class Results extends Component {

    render() {
        return (
            <Container>
                <Title>
                    {this.props.title}
                </Title>
                <PictureContainer>
                    <ImageContainer image={this.props.image}/>
                    <CaptionContainer>
                        <Description>
                          {this.props.description}
                        </Description>
                        <ButtonContainer>
                            <Pickable>
                              Try out Pickable!
                            </Pickable>
                        </ButtonContainer>
                    </CaptionContainer>
                </PictureContainer>
            </Container>
        )
    }
}

export default Results;
