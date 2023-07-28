import React from 'react'  //type rafce to get this react functional component

import { Brand, CallToAction, Navbar } from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CallToAction />
        <Blog />
        <Footer />
    </div>
  )
}

export default App