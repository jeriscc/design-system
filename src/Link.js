import styled from 'styled-components';
import theme from './theme';

const Link = styled.a`
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  color: ${theme.colors.primary};
  &:active,
  &:hover {
    outline-width: 0;
    transition: 0.1s;
    opacity: 0.6;
  }
`;

export default Link;
