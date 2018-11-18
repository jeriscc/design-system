import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  fontSize,
  fontWeight,
  textAlign,
  space,
  color,
  propTypes
} from 'styled-system';
import theme from './theme';

export const caps = props =>
  props.caps
    ? {
        textTransform: 'uppercase'
      }
    : null;

export const regular = props =>
  props.regular ? { fontWeight: props.theme.regular } : null;

export const bold = props =>
  props.bold ? { fontWeight: props.theme.bold } : null;

export const italic = props => (props.italic ? { fontStyle: 'italic' } : null);

const Text = styled.div`
    ${italic} ${fontSize} ${space} ${color} ${caps} ${regular} ${bold} ${textAlign};
`;

Text.displayName = 'Text';

Text.propTypes = {
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
  ...propTypes.textAlign,
  ...propTypes.space,
  ...propTypes.color
};

Text.defaultProps = {
  theme,
  m: 0,
  p: 0,
  as: 'p'
};

export default Text;
