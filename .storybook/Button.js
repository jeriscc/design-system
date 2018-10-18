import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Button } from '../src'

const description = 'A Button'

storiesOf('Button', module)
  .add('Layout component', withInfo({
    text: description,
    inline: true
  })(() => (
    <Button>
      Hello
    </Button>
  )))