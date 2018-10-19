import Box from './Box';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import { space } from 'styled-system';
import theme from './theme';

const Button = Box.withComponent('a').extend`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-size: 1em;
  font-family: inherit;
  font-weight: 700;
  line-height: 1.125;
  appearance: none;
  cursor: pointer;
  padding: 0.25em 1em;
  border-radius: 9999px;
  border: none;
`;

Button.defaultProps = {
  theme,
  bg: 'cyan.0',
  color: 'cyan.6',
  fontSize: 3,
  m: 0,
  px: 3,
  py: 2
};

export default Button;
