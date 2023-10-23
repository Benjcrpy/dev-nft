import React from 'react'
import "./trendingNFTs.css"
import test1 from "../../assets/vision1.png"


const AboutUs = () => {
  return (
    <div className='about-us absolute-center' section id="vision">
      <div className='au-left'>
        <div className='au-left-diamond'>
          <div className='au-left-diamond-item'>
            <span style={{ '--i': '1' }}>
              <img
                className='au-left-diamond-img'
                alt="au-img"
                src={test1}
              ></img>
            </span>
          </div>
        </div>
      </div>
      <div className='au-right absolute-center'>
        <div className='au-heading'>
          Vision
        </div>
        <div className='au-description'>
        To picture a world in which digital works of art, collectibles, 
        and intellectual property are safely and openly tokenized, 
        enabling creators to be fairly compensated and collectors to 
        acquire truly one-of-a-kind digital goods. Being the leading 
        NFT marketplace, it is our objective to enable creators and 
        collectors to take part in the digital revolution. 
        </div>
      </div>
    </div>
  );
  
  

}

export default AboutUs