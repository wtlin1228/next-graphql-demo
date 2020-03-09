import React from 'react'
import styled from 'styled-components'

import MenuItem from './menu-item'
import LogoutButton from '../containers/logout-button'
import HomeIcon from '../assets/icons/home.svg'
import CartIcon from '../assets/icons/cart.svg'
import ProfileIcon from '../assets/icons/profile.svg'

export default function Footer() {
  return (
    <Container>
      <InnerContainer>
        <MenuItem to='/'>
          <HomeIcon />
          Home
        </MenuItem>
        <MenuItem to='/cart'>
          <CartIcon />
          Cart
        </MenuItem>
        <MenuItem to='/profile'>
          <ProfileIcon />
          Profile
        </MenuItem>
        <LogoutButton />
      </InnerContainer>
    </Container>
  )
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled.footer`
  flex-shrink: 0;
  margin-top: auto;
  background-color: white;
  color: ${props => props.theme.colors.textSecondary};
  position: sticky;
  bottom: 0;
`

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 460;
  padding: ${props => props.theme.unit * 2.5};
  margin: 0 auto;
`
