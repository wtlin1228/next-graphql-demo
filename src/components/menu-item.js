import styled, { css } from 'styled-components'
import { Link } from '@reach/router'

export const menuItemClassName = css`
  flex-grow: 1;
  width: 0;
  font-family: inherit;
  font-size: 20;
  color: inherit;
  letter-spacing: 1.5;
  text-transform: uppercase;
  text-align: center;
  svg: {
    display: block;
    width: 60;
    margin: 0 auto ${props => props.theme.unit}px;
    fill: ${props => props.theme.colors.secondary};
  }
`

const MenuItem = styled(Link)`
  ${menuItemClassName}
  text-decoration: none;
`

export default MenuItem
