import styled, { keyframes } from 'styled-components'
import { size } from 'polished'

import Logo from '../assets/logo.svg'

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`

const Loading = styled(Logo)`
  ${size(64)}
  display: block;
  margin: auto;
  fill: ${props => props.theme.colors.grey};
  path {
    transform-origin: center;
    animation: ${spin} 1s linear infinite;
  }
`

export default Loading
