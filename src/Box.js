import styled from 'styled-components';
import { space, width, color, textAlign } from 'styled-system';
import PropTypes from 'prop-types';
import theme from './theme';

const Box = styled.div`
  ${space} ${width} ${color} ${textAlign};
`;

Box.displayName = 'Box';

Box.defaultProps = {
  theme
};

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
]);

Box.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
  width: numberStringOrArray,
  w: numberStringOrArray,
  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  /** Padding */
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray
};

export default Box;
