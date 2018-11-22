import palx from 'palx';
import { includes, get } from 'lodash';

//=============================================================================
// COLORS
//=============================================================================
// The primary color
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

// Priceline Design System Shadows
export const shadowColor = 'rgba(0,0,0,0.08)';
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
];

//=============================================================================
// FONTS
//=============================================================================
export const font = `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`;
export const mono = `"SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
"Liberation Mono", Menlo, Courier, monospace`;

export const fontSizes = [12, 14, 16, 20, 24, 32, 48];

export const regular = 400;
export const bold = 600;

//=============================================================================
// HELPER FUNCTIONS
//=============================================================================
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

/**
 * @param {string} key - key of color in colors object
 * @return {string} - hex value of that color (or the key
 * itself if it is not found)
 */
export const cx = key => get(colors, key, key);

/**
 * @param {string} color - name/key/hex of color in colors object
 * @param {number} alpha - the desired transparency value
 * @return {string} - rgba string for the color with transparency
 */
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

//=============================================================================
// BREAKPOINTS, SPACING
//=============================================================================
export const breakpoints = [32, 40, 48, 64];
export const mediaQueries = breakpoints.map(createMediaQuery);
const aliases = ['sm', 'md', 'lg', 'xl'];
addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);
export const space = [0, 4, 8, 16, 32, 64, 128];
export const maxContainerWidth = '5rem';

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
