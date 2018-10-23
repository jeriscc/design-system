import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button } from '../src';

const description = 'A Button';

storiesOf('Button', module)
  .addDecorator(
    withInfo({
      header: false,
      inline: true,
      propTablesExclude: [Button]
    })
  )
  .add('Button component', () => <Button>Hello World</Button>, {
    info: {
      header: true,
      text: description,
      propTablesExclude: []
    }
  })
  .add('Inverted', () => (
      <div>
        <Button bg="cyan.6" color="white" inverted mr={2}>Inverted</Button>
        <Button>Normal</Button>
      </div>
    ),
    {
      info: {
        text: "Buttons with the `inverted` flag use their `bg` prop (rather than `color`) as the base of their shadow"
      }
    }
  )
  .add('disabled', () => (
    <Button disabled>Disabled</Button>
  ));
