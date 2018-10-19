import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Link } from '../src';

const description = 'The link component';

storiesOf('Link', module)
  .addDecorator(
    withInfo({
      header: false,
      inline: true,
      propTablesExclude: [Link],
      styles: {
        infoBody: {
          margin: 'none'
        }
      }
    })
  )
  .add('Link component', () => <Link href="https://www.jeris.cc">Hello World</Link>, {
    info: {
      header: true,
      text: description,
      propTablesExclude: []
    }
  })