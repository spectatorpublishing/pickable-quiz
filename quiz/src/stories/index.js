import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import AnswerBox from '../Components/AnswerBox';
import { Button, Welcome } from '@storybook/react/demo';

import TitleBox from '../Components/TitleBox'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
storiesOf('AnswerBox', module).add('Empty Answerbox', () => <AnswerBox/>);
storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
<<<<<<< HEAD
  ));
=======
  ));

storiesOf('TitleBox', module).add('TitleBox', () => <TitleBox title="Title"/>);
>>>>>>> 9fc7270deea7052e9604e76c00ace49e79f586a8
