import React from 'react'
import "./topFold.css"
import Button from '../../common/Button'
const TopFold = () => {
  return <div className='topfold absolute-center'>
      <div className='tf-left'>

        <div className='tf-heading'>
          Browse, Bid, Create and Sell NFTs!
        </div>
        <div className='tf-description'>
          The upcoming NFT Marketplace for artist worldwide! Make sure to upload your NFTs using the newley found marketplace!

        </div>
        <div className='tf-left-btns'>
          <Button btnType='PRIMARY' btnText='BROWSE'/>
          <Button btnType='SECONDARY' btnText='CREATE' customClass='tf-left-secondary-btn'/>
       
        </div>
        <div className='tf-left-infoStats'>
          <div className='tf-is-infoItem absolute-center' >
            <div className='tf-infoItem-count'>1K+</div>
            <div className='tf-infoItem-label'>Collection</div>

          </div>
          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>70</div>
            <div className='tf-infoItem-label'>Current Artist</div>

          </div>
          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>30</div>
            <div className='tf-infoItem-label'>Communities</div>

          </div>
          
        </div>
    

      
      </div>
      <div className='tf-right'>
        <div className='tf-r-bg-blob'></div>
        <div className='tf-right-diamond'>
          <div className='tf-r-diamond-item'>
          <span style={{'--i': '1'}}> 
          <img 
          className='tf-r-diamond-img' 
          alt="diamond-banner"
          src="https://img-cdn.magiceden.dev/rs:fill:128:128:0:0/plain/https://bafybeigch4m7rbec2l255powwbjmacnyj5n5o54qcboiwfgs2nnw6thimq.ipfs.nftstorage.link/"
          >
          </img></span>
          </div>
          <div className='tf-r-diamond-item absolute-center'>
          <span style={{'--i': '2'}}> 
          <img 
          className='tf-r-diamond-img' 
          alt="diamond-banner"
          src="https://img-cdn.magiceden.dev/rs:fill:128:128:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/famous_fox_federation_pfp_1679672949828.gif"
          >
          </img></span>
          </div>
          <div className='tf-r-diamond-item absolute-center'>
          <span style={{'--i': '3'}}> 
          <img 
          className='tf-r-diamond-img' 
          alt="diamond-banner"
          src="https://img-cdn.magiceden.dev/rs:fill:128:128:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/clear_collectibles_pfp_1695602866672.gif"
          >
          </img></span>
          </div>
          <div className='tf-r-diamond-item absolute-center'>
          <span style={{'--i': '4'}}> 
          <img 
          className='tf-r-diamond-img' 
          alt="diamond-banner"
          src="https://img-cdn.magiceden.dev/rs:fill:128:128:0:0/plain/https://bafybeidd6mu775yyagyr4vgo6y2ayb5dc7vylv5arnd3mupbscek5zveya.ipfs.nftstorage.link/"
          >
          </img></span>
          </div>
        </div>
       
        </div>


     </div>
  
}

export default TopFold