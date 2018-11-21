import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Flex, Box } from '../src';

storiesOf('Flex', module)
  .addDecorator(
    withInfo({
      text: 'Flex Component',
      inline: false
    })
  )
  .add('Basic', () => (
    <Flex textAlign="center" alignItems="center">
      <Box width={1 / 2} p={3} color="white" bg="primary">
        Flex
      </Box>
      <Box width={1 / 2} p={1} color="white" bg="accent">
        Box
      </Box>
    </Flex>
  ));
