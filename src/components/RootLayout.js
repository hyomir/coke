import 'assets/css/main.css'
import React from 'react'
import Header from './main/Header'
import Footer from './main/Footer'
import Main from './main/Main'

function RootLayout() {
  return (
    <div className="layout">
      <div className="layout-wrap">
        <Header></Header>
        <Main></Main>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default RootLayout