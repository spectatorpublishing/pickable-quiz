import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';

import QuestionBox from '../Components/QuestionBox'
import TitleBox from '../Components/TitleBox'
import Answers from '../Answers'
import Question from '../Components/Question'

import img from './test.jpg'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));



const ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const question_answer_data = {
	question: ipsum,
	answers: [
		{answer: ipsum, img: img},
		{answer: ipsum, img: img},
		{answer: ipsum, img: img},
		{answer: ipsum, img: img},
		{answer: ipsum, img: img}
	]
}

storiesOf('TitleBox', module).add('TitleBox', () => <TitleBox title = "some title" description = {ipsum}/>);
storiesOf('QuestionBox', module).add('QuestionBox', () => <QuestionBox question={ipsum}/>);
storiesOf('Answers', module).add('Answers', () => <Answers text={ipsum} answerImage= "./test.jpeg"/>);

storiesOf('Question', module).add('Question', () => <Question data = {question_answer_data}/>);