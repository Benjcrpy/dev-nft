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
        To revolutionize the way we perceive and interact with art in the digital realm. 
        We believe in empowering digital artists, fostering community engagement, 
        and pushing the boundaries of creativity through the revolutionary 
        medium of Non-Fungible Tokens (NFTs).
        </div>
      </div>
    </div>
  );
  
  

}

export default AboutUs