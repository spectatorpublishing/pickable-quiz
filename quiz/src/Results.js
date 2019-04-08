import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
flex: 1;
flex-direction: column;
background-color: #EC2058;
justify-content: center;
width: 70vw;
max-width: 1000px;
margin: auto;
margin-top: 30px;
margin-bottom: 30px;
border-radius: 10px;
@media (max-width: 768px) {
  width: 90vw;
}
`

const Title = styled.div`
text-align: center;
padding: 20px 0;
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
@media (max-width: 768px) {
  display: block
}
`

const ImageContainer = styled.div`
height: 250px;
width: 50%;
background-image: url("${props => props.image}");
background-size: cover;
background-position: center;
border-radius: 10px;
margin: 20px;
@media (max-width: 768px) {
  width: 80%;
  margin-left: 10%;
}
`

const CaptionContainer = styled.div`
width: 50%;
padding: 15px 0;
flex: 1;
flex-direction: column;
align-items: center;
color: white;
@media (max-width: 768px) {
  width: 80%;
  margin-left: 10%;
}
`

const Description = styled.div`
padding-bottom: 30px;
width: 90%;
font-size: 1rem;
margin-left: 5%;
`

const ButtonContainer = styled.div`
height: 40%;
display: block;
padding-bottom: 30px;
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

const Titles=[
"Sporty",
"Nature",
"Intellectual",
"Adventurous",
"Romantic"
]

const Blurbs=[
"You should go on a sporty date! You love to get your endorphins pumping by working out, whether that’s a club sport, a solo run, or even a hike with some friends. You’ve got a healthy sense of competition and a true appreciation for the value of physical activity - hey, maybe you’ve even got a membership to Pressed Juice or GNC. For a fitness fiend like you, we recommend going rock climbing at the Zuckerman Institute, ice-skating (when it gets cold enough!), or taking a bike ride through Central Park.",
"You should go on a nature date! The idea of going outdoors fuels you with endless energy. You love breathing fresh air and enjoy the chilly breeze. You definitely wouldn’t mind spending an afternoon with your date kayaking on the Hudson River, walking around Battery Park City, or simply having a picnic in Central Park.",
"You should go on an intellectual date! You indulge in learning and love to connect knowledge across interdisciplinary academic fields. You’ve got strong critical and analytical skills, and it’s natural for you to engage in interesting discussions with your date. Maybe attending an independent film screening, meeting up at the MoMA, or going to a poetry slam!",
"You should go on an adventurous date! You’re a thrillseeker, totally fearless and up for anything. Some might think you’re too wild, but the right kind of person will appreciate that you can’t be tamed! For a free spirit like you, only the most fun options will do. We suggest a helicopter ride around New York, Citi biking the perimeter of a borough, or surfing in Rockaway Beach.",
"You should go on a romantic date, ooh la la! You seek affection in your relationships and you value openness. You are not hesitant to chase after your passions or show your emotions. Your perfect date might be on the roof of the Met, or better yet a sit down dinner where you’ll get the chance to get to know your date. Maybe your ideal date is sitting right next to you in your French New Wave class, who knows?"
]

const FinalImages = [
"https://s3.amazonaws.com/spec-imagehosting/Sporty+Date+-+final+result.jpeg",
"https://s3.amazonaws.com/spec-imagehosting/nature+date+-+final+result.jpg",
"https://s3.amazonaws.com/spec-imagehosting/Intellectual+Date+-+final+result.jpeg",
"https://s3.amazonaws.com/spec-imagehosting/adventurous+date+-+final+result.jpg",
"https://s3.amazonaws.com/spec-imagehosting/romantic+date+-+final+result.jpg"
]

class Results extends Component {

   constructor() {
    super()
    this.state = 10
  }

    countAnswers() {
      var counts = [0,0,0,0,0]
      switch (this.props.answers[0]) {
        case 1: 
          counts[0]++;
          break;
        case 2:
          counts[2]++;
          break;
        case 3:
          counts[4]++;
          break;
        case 4:
          counts[1]++;
          break;
        case 5:
          counts[3]++;
          break;
        default:
          break;
      }
      switch (this.props.answers[1]) {
        case 1: 
          counts[1]++;
          break;
        case 2:
          counts[4]++;
          break;
        case 3:
          counts[2]++;
          break;
        case 4:
          counts[3]++;
          break;
        case 5:
          counts[0]++;
          break;
        default:
          break;
      }
      switch (this.props.answers[2]) {
        case 1: 
          counts[2]++;
          break;
        case 2:
          counts[0]++;
          break;
        case 3:
          counts[1]++;
          break;
        case 4:
          counts[3]++;
          break;
        case 5:
          counts[4]++;
          break;
        default:
          break;
      }
      switch (this.props.answers[3]) {
        case 1: 
          counts[0]++;
          break;
        case 2:
          counts[2]++;
          break;
        case 3:
          counts[3]++;
          break;
        case 4:
          counts[1]++;
          break;
        case 5:
          counts[4]++;
          break;
        default:
          break;
      }
      switch (this.props.answers[4]) {
        case 1: 
          counts[0]++;
          break;
        case 2:
          counts[1]++;
          break;
        case 3:
          counts[2]++;
          break;
        case 4:
          counts[3]++;
          break;
        case 5:
          counts[4]++;
          break;
        default:
          break;
      }
      switch (this.props.answers[5]) {
        case 1: 
          counts[0]++;
          break;
        case 2:
          counts[2]++;
          break;
        case 3:
          counts[3]++;
          break;
        case 4:
          counts[1]++;
          break;
        case 5:
          counts[4]++;
          break;
        default:
          break;
      }
      switch (this.props.answers[6]) {
        case 1: 
          counts[2]++;
          break;
        case 2:
          counts[3]++;
          break;
        case 3:
          counts[0]++;
          break;
        case 4:
          counts[4]++;
          break;
        case 5:
          counts[1]++;
          break;
        default:
          break;
      }
      switch (this.props.answers[7]) {
        case 1: 
          counts[2]++;
          break;
        case 2:
          counts[4]++;
          break;
        case 3:
          counts[0]++;
          break;
        case 4:
          counts[1]++;
          break;
        case 5:
          counts[3]++;
          break;
        default:
          break;
      }
      switch (this.props.answers[8]) {
        case 1: 
          counts[2]++;
          break;
        case 2:
          counts[0]++;
          break;
        case 3:
          counts[3]++;
          break;
        case 4:
          counts[1]++;
          break;
        case 5:
          counts[4]++;
          break;
        default:
          break;
      }
      switch (this.props.answers[9]) {
        case 1: 
          counts[0]++;
          break;
        case 2:
          counts[1]++;
          break;
        case 3:
          counts[2]++;
          break;
        case 4:
          counts[4]++;
          break;
        case 5:
          counts[3]++;
          break;
        default:
          break;
      }
      var maxIndex = counts.reduce(function(highestIndex, element, index, array){
        return element > array[highestIndex] ? index : highestIndex;
      }, 0);
      this.state = maxIndex;
    }

    render() {
        this.countAnswers();
        return (
            <Container>
                <Title>
                    Your type of date is: {Titles[this.state]}
                </Title>
                <PictureContainer>
                    <ImageContainer image={FinalImages[this.state]}/>
                    <CaptionContainer>
                        <Description>
                          {Blurbs[this.state]}
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

