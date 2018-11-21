import Box from './Box';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled(Box)`
  display: block;
  max-width: 100%;
  height: auto;
`;

Image.displayName = 'Image';

Image.propTypes = {
  as: 'img',
  alt: PropTypes.string.isRequired
};

export default Image;
