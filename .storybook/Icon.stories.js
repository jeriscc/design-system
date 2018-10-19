import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Icon } from '../src';

const description = 'An icon component wrapping font awesome.';

storiesOf('Icon', module)
  .addDecorator(
    withInfo({
      header: false,
      inline: true,
      propTablesExclude: [Icon],
      styles: {
        infoBody: {
          margin: 'none'
        }
      }
    })
  )
  .add('Layout component', () => <Icon icon={['fab', 'github']}/>, {
    info: {
      header: true,
      text: description,
      propTablesExclude: []
    }
  })