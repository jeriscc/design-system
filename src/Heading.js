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

Heading.h3 = styled(Heading)``;

Heading.h3.defaultProps = {
    bold: true,
    as: 'h3',
    fontSize: 4,
    m: 0
};

Heading.h4 = styled(Heading)``;

Heading.h4.defaultProps = {
    bold: true,
    as: 'h4',
    fontSize: 3,
    m: 0
};

Heading.h5 = styled(Heading)``;

Heading.h5.defaultProps = {
    bold: true,
    as: 'h5',
    fontSize: 2,
    m: 0
};

Heading.h6 = styled(Heading)``;

Heading.h6.defaultProps = {
    bold: true,
    as: 'h6',
    fontSize: 1,
    m: 0
};

export default Heading;