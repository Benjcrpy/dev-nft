import React from 'react'
import "./App.css"

import TopFold from './components/TopFold'
import BrandsIntegration from './components/BrandsIntegration'


import Footer from './components/Footer'
import NavBar from './components/NavBar/NavBar'
import AboutUs from './components/AboutUs'
import Vision from './components/Vision'

const App = () => {
  return (
    <div className='max-width'>
      <NavBar/>
      <TopFold />
      <Vision />
      <AboutUs />
      <BrandsIntegration />
      <Footer />

    </div>
  )
}

export default App