import React from 'react'
import "./App.css"

import TopFold from './components/TopFold'
import BrandsIntegration from './components/BrandsIntegration'


import Footer from './components/Footer'
import NavBar from './components/NavBar/NavBar'
import AboutUs from './components/AboutUs'
import Vision from './components/Vision'
import Promotion from './components/Promotion/promotion'
import Info from './components/infosection/info'
import Product from './components/product/product'


const App = () => {
  return (
    <div className='max-width'>
    
     
     <NavBar/>
      <Promotion/>
      <TopFold />
      <Vision />
      <AboutUs />
      <Info/>
      <Product/>

      <BrandsIntegration />
      <Footer />
      
    </div>
  )

}

export default App