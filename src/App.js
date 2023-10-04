import React from 'react'
import "./App.css"
import Header from "./components/Header"
import TopFold from './components/TopFold'
import BrandsIntegration from './components/BrandsIntegration'
import TrendingNFT from './components/TrendingNFTs'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='max-width'>
      <Header />
      <TopFold />
      <BrandsIntegration />
      <TrendingNFT />
      <InfoSection />
      <Footer />

    </div>
  )
}

export default App