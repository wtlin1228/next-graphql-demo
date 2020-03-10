import React from 'react'
import styled from 'styled-components'
import { useApolloClient } from '@apollo/react-hooks'

import { menuItemClassName } from '../components/menu-item'
import ExitIcon from '../svgrs/exit-svg'

const LogoutButton = () => {
  const client = useApolloClient()
  return (
    <StyledButton
      data-testid='logout-button'
      onClick={() => {
        client.writeData({ data: { isLoggedIn: false } })
        localStorage.clear()
      }}
    >
      <ExitIcon />
      Logout
    </StyledButton>
  )
}

export default LogoutButton

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const StyledButton = styled.button`
  ${menuItemClassName}
  background: none;
  border: none;
  padding: 0;
`
