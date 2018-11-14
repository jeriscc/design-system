import Box from './Box';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import {
  space,
  width,
  color,
  fontSize,
  textAlign,
  propTypes
} from 'styled-system';
import theme, { hexa } from './theme';

const Button = styled(Box)`
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
  transition ${3 / 16}s cubic-bezier(0.375, 0, 0.675, 1) box-shadow;
  box-shadow: none;
  border-radius: 9999px;
  border: none;
  
  &:hover,
  &:focus {
    ${props =>
      props.disabled == false && {
        boxShadow: `0 1.5px 4px ${
          props.inverted ? hexa(props.bg, 0.5) : hexa(props.color, 0.3)
        };`
      }}
  }

  &:active {
    outline: 0;
    box-shadow: none;
  }

  ${props => props.disabled && { opacity: 0.5, cursor: 'not-allowed' }};
`;

Button.defaultProps = {
  as: 'a',
  theme,
  bg: 'cyan.0',
  color: 'cyan.6',
  inverted: false,
  disabled: false,
  fontSize: 3,
  m: 0,
  px: 3,
  py: 2
};

export default Button;
