import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Text } from '../src';

const description = 'The text component';

storiesOf('Text', module)
  .addDecorator(
    withInfo({
      header: false,
      inline: true,
      propTablesExclude: [Text],
      styles: {
        infoBody: {
          margin: 'none'
        }
      }
    })
  )
  .add('Text component', () => <Text>Hello World</Text>, {
    info: {
      header: true,
      text: description,
      propTablesExclude: []
    }
  })
  .add('Various Sizes', () => <div>
    <Text fontSize={6}>Size 6</Text>
    <Text fontSize={5}>Size 5</Text>
    <Text fontSize={4}>Size 4</Text>
    <Text fontSize={3}>Size 3</Text>
    <Text fontSize={2}>Size 2</Text>
    <Text fontSize={1}>Size 1</Text>
  </div>);
