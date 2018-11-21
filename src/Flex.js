import styled from 'styled-components';
import {
  alignSelf,
  alignItems,
  justifyContent,
  flexDirection,
  flex,
  flexWrap,
  propTypes
} from 'styled-system';
import Box from './Box';
import PropTypes from 'prop-types';

const Flex = styled(Box)`
    display: flex;
    ${alignSelf} ${alignItems} ${justifyContent} ${flexWrap} ${flexDirection} ${flex};
`;

Flex.propTypes = {
  wrap: PropTypes.bool,
  ...propTypes.alignSelf,
  ...propTypes.alignItems,
  ...propTypes.justifyContent,
  ...propTypes.flexDirection,
  ...propTypes.flexWrap,
  ...propTypes.flex
};

Flex.displayName = 'Flex';

export default Flex;
