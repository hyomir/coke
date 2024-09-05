import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function RootLayout() {
  return (
    <div className="layout">
      <Header></Header>
      <Footer></Footer>
    </div>
  )
}

export default RootLayout