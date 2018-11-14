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
  .add('Text component', () => <Text as="p">Hello World</Text>, {
    info: {
      header: true,
      text: description,
      propTablesExclude: []
    }
  })
  .add('Various Sizes', () => <div>
    <Text as="p" fontSize={6}>Size 6</Text>
    <Text as="p" fontSize={5}>Size 5</Text>
  </div>);
