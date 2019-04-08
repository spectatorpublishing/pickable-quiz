import React, { Component } from 'react';
import styled from "styled-components";
import Question from "./Components/Question";
import Results from "./Results.js"

let QuestionData = [
   {
      "questionText":"What do you like to do to relax?",
      "answers":[
         {
            "type":"sporty",
            "text":"Go for a run",
            "image":"https://s3.amazonaws.com/spec-imagehosting/A1.jpg" 
         },
         {
            "type":"intellectual",
            "text":"Read a book",
            "image":"https://s3.amazonaws.com/spec-imagehosting/A2.jpg" 
         },
         {
            "type":"romantic",
            "text":"Meet up with friends",
            "image":"https://s3.amazonaws.com/spec-imagehosting/A3.jpg" 
         },
         {
            "type":"nature",
            "text":"Take a walk to Riverside",
            "image":"https://s3.amazonaws.com/spec-imagehosting/A4.jpg" 
         },
         {
            "type":"adventurous",
            "text":"One way swipe downtown",
            "image":"https://s3.amazonaws.com/spec-imagehosting/A5.jpg" 
         }
      ]
   },
   {
      "questionText":"How would you show somebody you care?",
      "answers":[
         {
            "type":"nature",
            "text":"Pick flowers from the lawn and give them to them",
            "image":"https://s3.amazonaws.com/spec-imagehosting/B1.jpg+(1200×1800).jpeg" 
         },
         {
            "type":"romantic",
            "text":"Bring them soup when they’re sick",
            "image":"https://s3.amazonaws.com/spec-imagehosting/B2.jpg+(6000×4000).jpeg" 
         },
         {
            "type":"intellectual",
            "text":"Give them a copy of your favorite book",
            "image":"https://s3.amazonaws.com/spec-imagehosting/B3.jpg+(4000×2667).jpeg" 
         },
         {
            "type":"adventurous",
            "text":"Rent a hedgehog and let them pet it",
            "image":"https://s3.amazonaws.com/spec-imagehosting/B4.jpg" 
         },
         {
            "type":"sporty",
            "text":"Dedicate a game-winning touchdown to them",
            "image":"https://s3.amazonaws.com/spec-imagehosting/B5.jpg" 
         }
      ]
   },
   {
      "questionText":"Where do you like to study?",
      "answers":[
         {
            "type":"intellectual",
            "text":"Butler Library",
            "image":"https://s3.amazonaws.com/spec-imagehosting/C-NoCo.png" 
         },
         {
            "type":"sporty",
            "text":"Avery Library",
            "image":"https://s3.amazonaws.com/spec-imagehosting/C-avery.png" 
         },
         {
            "type":"nature",
            "text":"On the Lawns",
            "image":"https://s3.amazonaws.com/spec-imagehosting/C-butler.png" 
         },
         {
            "type":"adventurous",
            "text":"NoCo",
            "image":"https://s3.amazonaws.com/spec-imagehosting/C-dorm.png" 
         },
         {
            "type":"romantic",
            "text":"My Room",
            "image":"https://s3.amazonaws.com/spec-imagehosting/C-lawn.png" 
         }
      ]
   },
   {
      "questionText":"What time do you wake up?",
      "answers":[
         {
            "type":"sporty",
            "text":"4:00 am",
            "image":"https://s3.amazonaws.com/spec-imagehosting/4am.JPG" 
         },
         {
            "type":"intellectual",
            "text":"7:00 am",
            "image":"https://s3.amazonaws.com/spec-imagehosting/7am.JPG" 
         },
         {
            "type":"adventurous",
            "text":"11:00 am",
            "image":"https://s3.amazonaws.com/spec-imagehosting/11am.JPG" 
         },
         {
            "type":"nature",
            "text":"4:00 pm ",
            "image":"https://s3.amazonaws.com/spec-imagehosting/4pm.JPG" 
         },
         {
            "type":"romantic",
            "text":"8:00pm - Disco Nap!",
            "image":"https://s3.amazonaws.com/spec-imagehosting/8pm.JPG" 
         }
      ]
   },
   {
      "questionText":"What’s your favorite place to eat?",
      "answers":[
         {
            "type":"sporty",
            "text":"JJ’s",
            "image":"https://s3.amazonaws.com/spec-imagehosting/E1.jpg" 
         },
         {
            "type":"nature",
            "text":"Ferris",
            "image":"https://s3.amazonaws.com/spec-imagehosting/E2.jpg" 
         },
         {
            "type":"intellectual",
            "text":"John Jay",
            "image":"https://s3.amazonaws.com/spec-imagehosting/E3.jpg" 
         },
         {
            "type":"adventurous",
            "text":"Diana",
            "image":"https://s3.amazonaws.com/spec-imagehosting/E4.jpg" 
         },
         {
            "type":"romantic",
            "text":"I cook in my dorm",
            "image":"https://s3.amazonaws.com/spec-imagehosting/E5.jpg" 
         }
      ]
   },
   {
      "questionText":"What kind of pet do you want to get next?",
      "answers":[
         {
            "type":"sporty",
            "text":"Dog",
            "image":"https://s3.amazonaws.com/spec-imagehosting/F1.jpg" 
         },
         {
            "type":"intellectual",
            "text":"Cat",
            "image":"https://s3.amazonaws.com/spec-imagehosting/F2.jpg" 
         },
         {
            "type":"adventurous",
            "text":"Snake",
            "image":"https://s3.amazonaws.com/spec-imagehosting/F3.jpg" 
         },
         {
            "type":"nature",
            "text":"Succulent plant",
            "image":"https://s3.amazonaws.com/spec-imagehosting/F4.jpg" 
         },
         {
            "type":"romantic",
            "text":"Rabbit",
            "image":"https://s3.amazonaws.com/spec-imagehosting/F5.jpg" 
         }
      ]
   },
   {
      "questionText":"Which transportation style would you prefer?",
      "answers":[
         {
            "type":"intellectual",
            "text":"Subway",
            "image":"https://s3.amazonaws.com/spec-imagehosting/G1.jpg" 
         },
         {
            "type":"adventurous",
            "text":"Driving",
            "image":"https://s3.amazonaws.com/spec-imagehosting/G2.jpg" 
         },
         {
            "type":"sporty",
            "text":"Taxi/Uber",
            "image":"https://s3.amazonaws.com/spec-imagehosting/G3.jpg" 
         },
         {
            "type":"romantic",
            "text":"On foot",
            "image":"https://s3.amazonaws.com/spec-imagehosting/G4.jpg" 
         },
         {
            "type":"nature",
            "text":"Cycling",
            "image":"https://s3.amazonaws.com/spec-imagehosting/G5.jpg" 
         }
      ]
   },
   {
      "questionText":"What’s your favorite NYC attraction?",
      "answers":[
         {
            "type":"intellectual",
            "text":"Film Forum",
            "image":"https://s3.amazonaws.com/spec-imagehosting/H1.jpg" 
         },
         {
            "type":"romantic",
            "text":"The High Line",
            "image":"https://s3.amazonaws.com/spec-imagehosting/H2.jpg" 
         },
         {
            "type":"sporty",
            "text":"Chelsea Piers",
            "image":"https://s3.amazonaws.com/spec-imagehosting/H3.jpg" 
         },
         {
            "type":"nature",
            "text":"Central Park",
            "image":"https://s3.amazonaws.com/spec-imagehosting/H4.jpg" 
         },
         {
            "type":"adventurous",
            "text":"Top of the Rock ",
            "image":"https://s3.amazonaws.com/spec-imagehosting/H5.jpg" 
         }
      ]
   },
   {
      "questionText":"Which class would you prefer?",
      "answers":[
         {
            "type":"intellectual",
            "text":"Symbolic Logic",
            "image":"https://s3.amazonaws.com/spec-imagehosting/I1.jpg" 
         },
         {
            "type":"sporty",
            "text":"PE Karate",
            "image":"testImage.jpeg" 
         },
         {
            "type":"adventurous",
            "text":"Medieval Romance: Beheadings, Magical Underworlds, and other Marvels",
            "image":"https://s3.amazonaws.com/spec-imagehosting/I3.jpg" 
         },
         {
            "type":"nature",
            "text":"Nature of Animal Minds",
            "image":"https://s3.amazonaws.com/spec-imagehosting/I4.jpg" 
         },
         {
            "type":"romantic",
            "text":"French New Wave Cinema",
            "image":"https://s3.amazonaws.com/spec-imagehosting/I5.jpg" 
         }
      ]
   },
   {
      "questionText":"Which dessert would you prefer after a bad day?",
      "answers":[
         {
            "type":"sporty",
            "text":"Green Smoothie",
            "image":"https://s3.amazonaws.com/spec-imagehosting/J1.jpg" 
         },
         {
            "type":"nature",
            "text":"Gorp",
            "image":"https://s3.amazonaws.com/spec-imagehosting/J2.jpg" 
         },
         {
            "type":"intellectual",
            "text":"Ferris Cheesecake",
            "image":"https://s3.amazonaws.com/spec-imagehosting/J3.jpg" 
         },
         {
            "type":"romantic",
            "text":"Chocolate Fondue ",
            "image":"https://s3.amazonaws.com/spec-imagehosting/J4.jpg" 
         },
         {
            "type":"adventurous",
            "text":"Kazandibi",
            "image":"https://s3.amazonaws.com/spec-imagehosting/J5.jpg" 
         }
      ]
   }
]

class QuestionSelectWrapper extends Component {
  constructor() {
    super()
    this.select = this.select.bind(this)
  }

  select(i) {
    this.props.select(this.props.question)(i)
  }

  render() {
    return <Question {...this.props} select={this.select}/>
  }
}

class Container extends Component {

  constructor() {
    super()
    this.state = {}
    this.select = this.select.bind(this)
    this.renderResults = this.renderResults.bind(this)
  }

  select(question) {
    return (answer) => {
      this.setState({[question]: answer})
    }
  }

  renderResults() {
   console.log(this.state)
   if (typeof this.state["0"] !== 'undefined' && typeof this.state["1"] !== 'undefined' && typeof this.state["2"] !== 'undefined' && typeof this.state["3"] !== 'undefined' && typeof this.state["4"] !== 'undefined' && typeof this.state["5"] !== 'undefined' && typeof this.state["6"] !== 'undefined' && typeof this.state["7"]  !== 'undefined' && typeof this.state["8"] !== 'undefined' && typeof this.state["9"] !== 'undefined') {
      return(
         <Results answers = {this.state}/>
      )
   }
  }

  render() {
    return ([
         QuestionData.map((i, index) => <QuestionSelectWrapper active={this.state[index]} select={this.select} question={index} questionData={i}/>),
         this.renderResults()
         ]
   )
  }
}

export default Container;
