import styled from 'styled-components';
import Text from './Text';
import theme from './theme';
import PropTypes from 'prop-types';

const Link = styled(Text)`
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  text-decoration: none;
  &:active,
  &:hover {
    outline-width: 0;
    opacity: 0.6;
    transition: 0.3s ease;
  }
`;

Link.displayName = 'Link';

Link.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
  theme: PropTypes.object,
  color: PropTypes.string
}

Link.defaultProps = {
  as: 'a',
  theme,
  color: 'info'
};

export default Link;
