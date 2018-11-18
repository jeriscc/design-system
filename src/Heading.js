import styled from 'styled-components';
import Text from './Text';
import theme from './theme';

const Heading = styled(Text)`
    color: inherit;
    line-height: 1.25;
`;

Heading.defaultProps = {
    theme,
    regular: true,
    fontSize: 5,
    m: 0
};

Heading.h1 = styled(Heading)``;

Heading.h1.defaultProps = {
    bold: true,
    as: 'h1',
    fontSize: 6,
    m: 0
};

Heading.h2 = styled(Heading)``;

Heading.h2.defaultProps = {
    bold: true,
    as: 'h2',
    fontSize: 5,
    m: 0
};

export default Heading;