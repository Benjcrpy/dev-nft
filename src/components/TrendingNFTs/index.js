import React from 'react'
import "./trendingNFTs.css"
import Slider from 'react-slick'
import {TRENDING_NFTS} from "../../data/trendingNfts"
import TrendingCard from './TrendingCard/index.js'

const settings = {
  slidesToShow:3,
  slidesToScroll:1,
  arrows: false,

}
const TrendingNFT = () => {
  return <div className='trending-nft'>
    <div className='tn-title'>
      <span className='heading-gradient absolute-center'>TRENDING NFTS</span>

      <Slider {...settings}>
        {TRENDING_NFTS.map((_nft) => (
        <TrendingCard key={_nft.id} nft={_nft}/>
        ))}
      </Slider>
    </div>
    </div>
  

}

export default TrendingNFT