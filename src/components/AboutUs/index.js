import React from 'react'
import "./trendingNFTs.css"
import test1 from "../../assets/test1.jpg"


const AboutUs = () => {
  return (
    <div className='aboutus absolute-center'>
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
          Vision!
        </div>
        <div className='au-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec lacus ac magna blandit aliquet. 
        Fusce enim massa, tincidunt id ullamcorper a, imperdiet in velit. Nullam id vehicula odio. Pellentesque 
        congue semper leo. Etiam scelerisque nisl vel lacus condimentum, consectetur rhoncus lectus tempus. 
        Nam rhoncus pellentesque nisl ac tempus. Duis mattis suscipit elit a faucibus. Donec lacinia orci sed tortor 
        molestie condimentum. Nulla non leo sed erat vestibulum tincidunt. Sed vel turpis tortor. Donec et mauris fermentum, 
        facilisis ipsum quis, auctor tortor. Cras et libero maximus, porttitor nisl at, consequat dolor. 
        </div>
      </div>
    </div>
  );
  
  

}

export default AboutUs