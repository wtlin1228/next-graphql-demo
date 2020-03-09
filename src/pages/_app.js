/**
 * Next.js uses the App component to initialize pages.
 * You can override it and control the page initialization.
 * Which allows you to do amazing things like:
 *
 * - Persisting layout between page changes
 * - Keeping state when navigating pages
 * - Custom error handling using componentDidCatch
 * - Inject additional data into pages
 * - Add global CSS
 *
 */

import App from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  unit: 8,
  colors: {
    primary: '#220a82',
    secondary: '#14cbc4',
    accent: '#e535ab',
    background: '#f7f8fa',
    grey: '#d8d9e0',
    text: '#343c5a',
    textSecondary: '#747790'
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Source Sans Pro, sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 600;
  }
  h1 {
    font-size: 48;
    line-height: 1;
  }
  h2 {
    font-size: 40;
  }
  h3 {
    font-size: 36;
  }
  h5 {
    font-size: 16;
    text-transform: uppercase;
    letter-spacing: 4;
  }
`
