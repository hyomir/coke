import React from 'react'
import Header from './main/Header'
import Footer from './main/Footer'
import Main from './main/Main'

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