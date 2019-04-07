import React, { Component } from 'react';
import styled from "styled-components";
import Question from "./Components/Question";

let QuestionData = [
   {
      "questionText":"What do you like to do to relax?",
      "answers":[
         {
            "type":"sporty",
            "text":"Go for a run"
         },
         {
            "type":"intellectual",
            "text":"Read a book"
         },
         {
            "type":"romantic",
            "text":"Meet up with friends"
         },
         {
            "type":"nature",
            "text":"Take a walk to Riverside"
         },
         {
            "type":"adventurous",
            "text":"One way swipe downtown"
         }
      ]
   },
   {
      "questionText":"How would you show somebody you care?",
      "answers":[
         {
            "type":"nature",
            "text":"Pick flowers from the lawn and give them to them"
         },
         {
            "type":"romantic",
            "text":"Bring them soup when they’re sick"
         },
         {
            "type":"intellectual",
            "text":"Give them a copy of your favorite book"
         },
         {
            "type":"adventurous",
            "text":"Rent a hedgehog and let them pet it"
         },
         {
            "type":"sporty",
            "text":"Dedicate a game-winning touchdown to them"
         }
      ]
   },
   {
      "questionText":"Where do you like to study?",
      "answers":[
         {
            "type":"intellectual",
            "text":"Butler Library"
         },
         {
            "type":"sporty",
            "text":"Avery Library"
         },
         {
            "type":"nature",
            "text":"On the Lawns"
         },
         {
            "type":"adventurous",
            "text":"NoCo"
         },
         {
            "type":"romantic",
            "text":"My Room"
         }
      ]
   },
   {
      "questionText":"What time do you wake up?",
      "answers":[
         {
            "type":"sporty",
            "text":"4:00 am"
         },
         {
            "type":"intellectual",
            "text":"7:00 am"
         },
         {
            "type":"adventurous",
            "text":"11:00 am"
         },
         {
            "type":"nature",
            "text":"4:00 pm "
         },
         {
            "type":"romantic",
            "text":"8:00pm - Disco Nap!"
         }
      ]
   },
   {
      "questionText":"What’s your favorite place to eat?",
      "answers":[
         {
            "type":"sporty",
            "text":"JJ’s"
         },
         {
            "type":"nature",
            "text":"Ferris"
         },
         {
            "type":"intellectual",
            "text":"John Jay"
         },
         {
            "type":"adventurous",
            "text":"Diana"
         },
         {
            "type":"romantic",
            "text":"I cook in my dorm"
         }
      ]
   },
   {
      "questionText":"What kind of pet do you want to get next?",
      "answers":[
         {
            "type":"sporty",
            "text":"Dog"
         },
         {
            "type":"intellectual",
            "text":"Cat"
         },
         {
            "type":"adventurous",
            "text":"Snake"
         },
         {
            "type":"nature",
            "text":"Succulent plant"
         },
         {
            "type":"romantic",
            "text":"Rabbit"
         }
      ]
   },
   {
      "questionText":"Which transportation style would you prefer?",
      "answers":[
         {
            "type":"intellectual",
            "text":"Subway"
         },
         {
            "type":"adventurous",
            "text":"Driving"
         },
         {
            "type":"sporty",
            "text":"Taxi/Uber"
         },
         {
            "type":"romantic",
            "text":"On foot"
         },
         {
            "type":"nature",
            "text":"Cycling"
         }
      ]
   },
   {
      "questionText":"What’s your favorite NYC attraction?",
      "answers":[
         {
            "type":"intellectual",
            "text":"Film Forum"
         },
         {
            "type":"romantic",
            "text":"The High Line"
         },
         {
            "type":"sporty",
            "text":"Chelsea Piers"
         },
         {
            "type":"nature",
            "text":"Central Park"
         },
         {
            "type":"adventurous",
            "text":"Top of the Rock "
         }
      ]
   },
   {
      "questionText":"Which class would you prefer?",
      "answers":[
         {
            "type":"intellectual",
            "text":"Symbolic Logic"
         },
         {
            "type":"sporty",
            "text":"PE Karate"
         },
         {
            "type":"adventurous",
            "text":"Medieval Romance: Beheadings, Magical Underworlds, and other Marvels"
         },
         {
            "type":"nature",
            "text":"Nature of Animal Minds"
         },
         {
            "type":"romantic",
            "text":"French New Wave Cinema"
         }
      ]
   },
   {
      "questionText":"Which dessert would you prefer after a bad day?",
      "answers":[
         {
            "type":"sporty",
            "text":"Green Smoothie"
         },
         {
            "type":"nature",
            "text":"Gorp"
         },
         {
            "type":"intellectual",
            "text":"Ferris Cheesecake"
         },
         {
            "type":"romantic",
            "text":"Chocolate Fondue "
         },
         {
            "type":"adventurous",
            "text":"Kazandibi"
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
  }

  select(question) {
    return (answer) => {
      this.setState({[question]: answer})
    }
  }

  render() {
    return (
      QuestionData.map((i, index) => <QuestionSelectWrapper active={this.state[index]} select={this.select} question={index} questionData={i}/>)
    );
  }
}

export default Container;
