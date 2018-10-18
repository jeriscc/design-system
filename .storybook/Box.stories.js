import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Box } from '../src';

const description =
  'A low-level layout component for setting width, margin, padding, and color';

storiesOf('Box', module)
  .addDecorator(
    withInfo({
      header: false,
      inline: true,
      propTablesExclude: [Box],
      styles: {
        infoBody: {
          margin: "none"
        }
      }
    })
  )
  .add('Layout component',
    () => <Box p={3}>Hello</Box>,
    {
      info: {
        header: true,
        text: description,
        propTablesExclude: []
      }
    }
  )
  .add('Padding', () => <Box p={3}>Hello</Box>)
  .add('Margin', () => <Box m={3}>Hello</Box>)
  .add('Color', () => (
    <Box p={3} color="cyan.5">
      Hello
    </Box>
  ))
  .add('Background Color', () => (
    <Box p={3} color="white" bg="cyan.5">
      Hello
    </Box>
  ))
  .add('Width', () => (
    <Box p={3} width={1 / 2} color="white" bg="cyan.5">
      Half Width
    </Box>
  ))
  .add('Pixel Width', () => (
    <Box p={3} width={256} color="white" bg="cyan.5">
      256px width
    </Box>
  ))
  .add('VW Width', () => (
    <Box p={3} width="50vw" color="white" bg="cyan.5">
      50vw width
    </Box>
  ))
  .add('Directional Padding', () => (
    <Box p={3}>
      <Box m={1} pt={3} color="white" bg="cyan.5">
        Padding Top
      </Box>
      <Box m={1} pr={3} color="white" bg="cyan.5">
        Padding Right
      </Box>
      <Box m={1} pb={3} color="white" bg="cyan.5">
        Padding Bottom
      </Box>
      <Box m={1} pl={3} color="white" bg="cyan.5">
        Padding Left
      </Box>
      <Box m={1} px={3} color="white" bg="cyan.5">
        Padding X-Axis
      </Box>
      <Box m={1} py={3} color="white" bg="cyan.5">
        Padding Y-Axis
      </Box>
    </Box>
  ))
  .add('Directional Margin', () => (
    <Box p={3}>
      <Box mt={3} color="white" bg="cyan.5">
        Margin Top
      </Box>
      <Box mr={3} color="white" bg="cyan.5">
        Margin Right
      </Box>
      <Box mb={3} color="white" bg="cyan.5">
        Margin Bottom
      </Box>
      <Box ml={3} color="white" bg="cyan.5">
        Margin Left
      </Box>
      <Box mx={3} color="white" bg="cyan.5">
        Margin X-Axis
      </Box>
      <Box my={3} color="white" bg="cyan.5">
        Margin Y-Axis
      </Box>
    </Box>
  ));
