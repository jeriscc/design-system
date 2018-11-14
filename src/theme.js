// Build off of HackClub design system. Work in progress.

import palx from 'palx';
import { includes, get, omit } from 'lodash';
// import { removeProps } from 'styled-system'

const cyan = '#06c1da';
export const palette = palx(cyan);

export const grays = {
  darker: '#121217',
  dark: '#17171d',
  black: palette.black,
  slate: palette.gray[8],
  silver: palette.gray[7],
  smoke: palette.gray[2],
  snow: palette.gray[0],
  white: '#ffffff'
};

export const brand = {
  primary: cyan,
  accent: palette.indigo[4],
  success: palette.teal[5],
  info: palette.blue[5],
  warning: palette.orange[5],
  error: palette.red[7],
  muted: grays.silver
};

export const colors = {
  ...brand,
  ...grays,
  ...palette
};

export const font = `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`;

export const mono = `"SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
"Liberation Mono", Menlo, Courier, monospace`;

const createMediaQuery = n => `@media screen and (min-width:${n}em)`;

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      }
    })
  );

export const breakpoints = [32, 40, 48, 64];

export const mediaQueries = breakpoints.map(createMediaQuery);

const aliases = ['sm', 'md', 'lg', 'xl'];

addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);

export const space = [0, 4, 8, 16, 32, 64, 128];
export const fontSizes = [12, 14, 16, 20, 24, 32, 48];

export const maxContainerWidth = '5rem';

export const cx = key => get(colors, key, key);

export const hexa = (color, alpha) => {
  const hex = cx(color);
  if (!includes(hex, '#')) return shadowColor;
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha >= 0) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};

export const regular = 400;
export const bold = 600;

const theme = {
  colors,
  regular,
  bold,
  font,
  mono,
  maxContainerWidth,
  space,
  hexa,
  fontSizes
};

export default theme;
