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
  .add('Layout component',
    () => <Button>Hello</Button>,
    {
      info: {
        header: true,
        text: description,
        propTablesExclude: []
      }
    }
  );
