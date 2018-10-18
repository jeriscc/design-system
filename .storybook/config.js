import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider, Box } from '../src';
import { withOptions } from '@storybook/addon-options';

addDecorator(story => (
  <ThemeProvider webfonts>
    <Box p={3}>{story()}</Box>
  </ThemeProvider>
));

addDecorator(
  withOptions({
    name: 'Jeriscc Storybook',
    url: 'https://www.jeris.cc',
    showAddonPanel: false,
    sidebarAnimations: false
  })
);

const req = require.context('.', true, /\.js$/);

const load = () => {
  req.keys().forEach(req);
};

configure(load, module);
