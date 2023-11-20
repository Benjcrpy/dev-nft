import React from 'react'
import "./App.css"
import TopFold from './components/TopFold'
import BrandsIntegration from './components/BrandsIntegration'
import Footer from './components/Footer'
import NavBar from './components/NavBar/NavBar'
import AboutUs from './components/AboutUs'
import Promotion from './components/Promotion/promotion'
import Info from './components/infosection/info'
import Product from './components/product/product'
import CookieBanner from './components/Cookie/CookieBanner'
import posthog from 'posthog-js'
import Support from './components/Support/Support';
import About from './components/About/About'





const App = () => {
  return (
    <div className='max-width'>
 
        
      {posthog.has_opted_in_capturing()||posthog.has_opted_out_capturing() ? null : <CookieBanner/>}
      <NavBar/>
      <Promotion/>
      <TopFold />
      <AboutUs />
      <Info/>
      <Product/>
      <About/>
      <Support/>
      <BrandsIntegration />
      <Footer />

 
    </div> 
  )

}

export default App