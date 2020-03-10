import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { size } from 'polished'

import Button from './button'
import space from '../assets/images/space.jpg'
import Logo from '../svgrs/logo-svg'
import Curve from '../svgrs/curve-svg'
import Rocket from '../svgrs/rocket-svg'

export default class LoginForm extends Component {
  state = { email: '' }

  onChange = event => {
    const email = event.target.value
    this.setState(s => ({ email }))
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.login({ variables: { email: this.state.email } })
  }

  render() {
    return (
      <Container>
        <Header>
          <StyledCurve />
          <StyledLogo />
        </Header>
        <StyledRocket />
        <Heading>Space Explorer</Heading>
        <StyledForm onSubmit={e => this.onSubmit(e)}>
          <StyledInput
            required
            type='email'
            name='email'
            placeholder='Email'
            data-testid='login-input'
            onChange={e => this.onChange(e)}
          />
          <Button type='submit'>Log in</Button>
        </StyledForm>
      </Container>
    )
  }
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding-bottom: ${props => props.theme.unit * 6}px;
  color: white;
  background-color: ${props => props.theme.colors.primary};
  background-image: url(${space});
  background-size: cover;
  background-position: center;
`

const svgClassName = css`
  display: block;
  fill: currentColor;
`

const Header = styled.header`
  ${svgClassName}
  width: 100%;
  margin-bottom: ${props => props.theme.unit * 5};
  padding: ${props => props.theme.unit * 2.5};
  position: relative;
`

const StyledLogo = styled(Logo)`
  ${size(56)}
  display: block;
  margin: 0 auto;
  position: relative;
`

const StyledCurve = styled(Curve)`
  ${size('100%')}
  fill: ${props => props.theme.colors.primary};
  position: absolute;
  top: 0;
  left: 0;
`

const Heading = styled.h1`
  margin: ${props => props.theme.unit * 3}px ${props => props.theme.unit * 6}px;
`

const StyledRocket = styled(Rocket)`
  ${svgClassName}
  width: 250px;
`

const StyledForm = styled.form`
  width: 100%;
  max-width: 406px;
  padding: ${props => props.theme.unit * 3.5};
  border-radius: 3px;
  box-shadow: 6px 6px 1px rgba(0, 0, 0, 0.25);
  color: ${props => props.theme.colors.text};
  background-color: white;
`

const StyledInput = styled.input`
  width: 100%;
  margin-bottom: ${props => props.theme.unit * 2}px;
  padding: ${props => props.theme.unit * 1.25}px
    ${props => props.theme.unit * 2.5}px;
  border: 1px solid ${props => props.theme.colors.grey};
  font-size: 16;
  outline: none;
  :focus {
    border-color: ${props => props.theme.colors.primary};
  }
`
