import styled from 'styled-components';
import Text from './Text';
import theme from './theme';

const Link = styled(Text)`
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  &:active,
  &:hover {
    outline-width: 0;
    transition: 0.1s;
    opacity: 0.6;
  }
`;

Link.displayName = 'Link';

Link.defaultProps = {
  theme,
  color: 'info'
}

export default Link;
