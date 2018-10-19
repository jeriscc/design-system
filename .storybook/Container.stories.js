import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Container } from '../src';

storiesOf('Container', module)
  .addDecorator(
    withInfo({
      text: 'Container Component',
      inline: false
    })
  )
  .add('Container component', () => (
    <Container p={4} bg="smoke" style={{ height: '100vh' }}>
      Container Component
    </Container>
  ))
  .add('Custom maxWidth', () => (
    <Container maxWidth={32} p={4} bg="smoke" style={{ height: '100vh' }}>
      32rem-width Container
    </Container>
  ));
