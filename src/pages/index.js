import React, { Fragment } from 'react'
import { Router } from '@reach/router'
import { withApollo } from '../apollo/client'

// import Launch from './launch'
import Launches from './launches'
// import Cart from './cart'
// import Profile from './profile'
import { Footer, PageContainer } from '../components'

function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <Launches path='/' />
          {/* <Launch path='launch/:launchId' />
          <Cart path='cart' />
          <Profile path='profile' /> */}
        </Router>
      </PageContainer>
      <Footer />
    </Fragment>
  )
}

export default withApollo(Pages)
