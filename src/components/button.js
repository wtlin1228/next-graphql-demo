import styled from 'styled-components'
import { lighten } from 'polished'

const height = 50
export default styled.button`
  display: block;
  min-width: 200;
  height: ${height}px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.unit * 4}px;
  border: none;
  border-radius: ${height / 2};
  font-family: inherit;
  font-size: 18;
  line-height: ${height}px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.accent};
  cursor: pointer;
  outline: none;
  :hover {
    background-color: ${props => lighten(0.1, props.theme.colors.accent)};
  }
  :active {
    background-color: ${props => lighten(0.2, props.theme.colors.accent)};
  }
`
