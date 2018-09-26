// Build off of HackClub design system. Work in progress.

import palx from 'palx'
// import { includes, get, omit } from 'lodash'
// import { removeProps } from 'styled-system'

const cyan = '#06c1da'
export const palette = palx(cyan)

export const grays = {
  darker: '#121217',
  dark: '#17171d',
  black: palette.black,
  slate: palette.gray[8],
  silver: palette.gray[7],
  smoke: palette.gray[2],
  snow: palette.gray[0],
  white: '#ffffff'
}

export const brand = {
  primary: cyan,
  accent: palette.indigo[4],
  success: palette.teal[5],
  info: palette.blue[5],
  warning: palette.orange[5],
  error: palette.red[7],
  muted: grays.silver
}

export const colors = {
  ...brand,
  ...grays,
  ...palette
}

const theme = {
  colors
}

export default theme
