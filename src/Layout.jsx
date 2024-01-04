import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Footer, Header } from './components'

const Layout = () => {

  return (
    <>
    <Header />
  <Container className='mt-16'>
        <Outlet />
    </Container>
    <Footer />
    </>
  )
}

export default Layout