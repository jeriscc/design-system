import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Heading } from '../src';

const description = 'The heading component';

storiesOf('Heading', module)
  .addDecorator(
    withInfo({
      header: false,
      inline: true,
      propTablesExclude: [Heading],
      styles: {
        infoBody: {
          margin: 'none'
        }
      }
    })
  )
  .add('Heading h1 component', () => <Heading.h1>Hello World</Heading.h1>, {
    info: {
      header: true,
      text: description,
      propTablesExclude: []
    }
  })
  .add('Various Sizes', () => <div>
    <Heading.h1>Heading 1</Heading.h1>
    <Heading.h2>Heading 2</Heading.h2>
    {/* <Heading.h3>Heading 3</Heading.h3>
    <Heading.h4>Heading 4</Heading.h4>
    <Heading.h5>Heading 5</Heading.h5>
    <Heading.h6>Heading 6</Heading.h6> */}
  </div>);
