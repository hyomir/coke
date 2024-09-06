import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

function RootLayout() {
  return (
    <div className="layout">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default RootLayout