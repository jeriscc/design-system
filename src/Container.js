import styled from 'styled-components'
import Box from './Box'
import PropTypes from 'prop-types'
import theme from './theme'

const Container = styled(Box)`
  max-width: ${props => props.maxWidth}rem;
`

Container.displayName = 'Container'

Container.propTypes = {
  maxWidth: PropTypes.number
}

Container.defaultProps = {
  maxWidth: 64,
  mx: 'auto'
}

export default Container