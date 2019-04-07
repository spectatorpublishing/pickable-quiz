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
            "image":"testImage.jpeg" 
         },
         {
            "type":"intellectual",
            "text":"Read a book",
            "image":"testImage.jpeg" 
         },
         {
            "type":"romantic",
            "text":"Meet up with friends",
            "image":"testImage.jpeg" 
         },
         {
            "type":"nature",
            "text":"Take a walk to Riverside",
            "image":"testImage.jpeg" 
         },
         {
            "type":"adventurous",
            "text":"One way swipe downtown",
            "image":"testImage.jpeg" 
         }
      ]
   },
   {
      "questionText":"How would you show somebody you care?",
      "answers":[
         {
            "type":"nature",
            "text":"Pick flowers from the lawn and give them to them",
            "image":"testImage.jpeg" 
         },
         {
            "type":"romantic",
            "text":"Bring them soup when they’re sick",
            "image":"testImage.jpeg" 
         },
         {
            "type":"intellectual",
            "text":"Give them a copy of your favorite book",
            "image":"testImage.jpeg" 
         },
         {
            "type":"adventurous",
            "text":"Rent a hedgehog and let them pet it",
            "image":"testImage.jpeg" 
         },
         {
            "type":"sporty",
            "text":"Dedicate a game-winning touchdown to them",
            "image":"testImage.jpeg" 
         }
      ]
   },
   {
      "questionText":"Where do you like to study?",
      "answers":[
         {
            "type":"intellectual",
            "text":"Butler Library",
            "image":"testImage.jpeg" 
         },
         {
            "type":"sporty",
            "text":"Avery Library",
            "image":"testImage.jpeg" 
         },
         {
            "type":"nature",
            "text":"On the Lawns",
            "image":"testImage.jpeg" 
         },
         {
            "type":"adventurous",
            "text":"NoCo",
            "image":"testImage.jpeg" 
         },
         {
            "type":"romantic",
            "text":"My Room",
            "image":"testImage.jpeg" 
         }
      ]
   },
   {
      "questionText":"What time do you wake up?",
      "answers":[
         {
            "type":"sporty",
            "text":"4:00 am",
            "image":"testImage.jpeg" 
         },
         {
            "type":"intellectual",
            "text":"7:00 am",
            "image":"testImage.jpeg" 
         },
         {
            "type":"adventurous",
            "text":"11:00 am",
            "image":"testImage.jpeg" 
         },
         {
            "type":"nature",
            "text":"4:00 pm ",
            "image":"testImage.jpeg" 
         },
         {
            "type":"romantic",
            "text":"8:00pm - Disco Nap!",
            "image":"testImage.jpeg" 
         }
      ]
   },
   {
      "questionText":"What’s your favorite place to eat?",
      "answers":[
         {
            "type":"sporty",
            "text":"JJ’s",
            "image":"testImage.jpeg" 
         },
         {
            "type":"nature",
            "text":"Ferris",
            "image":"testImage.jpeg" 
         },
         {
            "type":"intellectual",
            "text":"John Jay",
            "image":"testImage.jpeg" 
         },
         {
            "type":"adventurous",
            "text":"Diana",
            "image":"testImage.jpeg" 
         },
         {
            "type":"romantic",
            "text":"I cook in my dorm",
            "image":"testImage.jpeg" 
         }
      ]
   },
   {
      "questionText":"What kind of pet do you want to get next?",
      "answers":[
         {
            "type":"sporty",
            "text":"Dog",
            "image":"testImage.jpeg" 
         },
         {
            "type":"intellectual",
            "text":"Cat",
            "image":"testImage.jpeg" 
         },
         {
            "type":"adventurous",
            "text":"Snake",
            "image":"testImage.jpeg" 
         },
         {
            "type":"nature",
            "text":"Succulent plant",
            "image":"testImage.jpeg" 
         },
         {
            "type":"romantic",
            "text":"Rabbit",
            "image":"testImage.jpeg" 
         }
      ]
   },
   {
      "questionText":"Which transportation style would you prefer?",
      "answers":[
         {
            "type":"intellectual",
            "text":"Subway",
            "image":"testImage.jpeg" 
         },
         {
            "type":"adventurous",
            "text":"Driving",
            "image":"testImage.jpeg" 
         },
         {
            "type":"sporty",
            "text":"Taxi/Uber",
            "image":"testImage.jpeg" 
         },
         {
            "type":"romantic",
            "text":"On foot",
            "image":"testImage.jpeg" 
         },
         {
            "type":"nature",
            "text":"Cycling",
            "image":"testImage.jpeg" 
         }
      ]
   },
   {
      "questionText":"What’s your favorite NYC attraction?",
      "answers":[
         {
            "type":"intellectual",
            "text":"Film Forum",
            "image":"testImage.jpeg" 
         },
         {
            "type":"romantic",
            "text":"The High Line",
            "image":"testImage.jpeg" 
         },
         {
            "type":"sporty",
            "text":"Chelsea Piers",
            "image":"testImage.jpeg" 
         },
         {
            "type":"nature",
            "text":"Central Park",
            "image":"testImage.jpeg" 
         },
         {
            "type":"adventurous",
            "text":"Top of the Rock ",
            "image":"testImage.jpeg" 
         }
      ]
   },
   {
      "questionText":"Which class would you prefer?",
      "answers":[
         {
            "type":"intellectual",
            "text":"Symbolic Logic",
            "image":"testImage.jpeg" 
         },
         {
            "type":"sporty",
            "text":"PE Karate",
            "image":"testImage.jpeg" 
         },
         {
            "type":"adventurous",
            "text":"Medieval Romance: Beheadings, Magical Underworlds, and other Marvels",
            "image":"testImage.jpeg" 
         },
         {
            "type":"nature",
            "text":"Nature of Animal Minds",
            "image":"testImage.jpeg" 
         },
         {
            "type":"romantic",
            "text":"French New Wave Cinema",
            "image":"testImage.jpeg" 
         }
      ]
   },
   {
      "questionText":"Which dessert would you prefer after a bad day?",
      "answers":[
         {
            "type":"sporty",
            "text":"Green Smoothie",
            "image":"testImage.jpeg" 
         },
         {
            "type":"nature",
            "text":"Gorp",
            "image":"testImage.jpeg" 
         },
         {
            "type":"intellectual",
            "text":"Ferris Cheesecake",
            "image":"testImage.jpeg" 
         },
         {
            "type":"romantic",
            "text":"Chocolate Fondue ",
            "image":"testImage.jpeg" 
         },
         {
            "type":"adventurous",
            "text":"Kazandibi",
            "image":"testImage.jpeg" 
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
   
  }

  render() {
    return (
      QuestionData.map((i, index) => <QuestionSelectWrapper active={this.state[index]} select={this.select} question={index} questionData={i}/>)
    );
  }
}

export default Container;
