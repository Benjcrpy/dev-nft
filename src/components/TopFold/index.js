import './topFold.css';
import Button from '../../common/Button';
import homepage from '../../assets/homepage1.png';


const TopFold = () => {

  return <div className='top-fold absolute-center' section id="top-fold">
     
      <div className='tf-left'>

        <div className='tf-heading'>
          Browse, Bid, Create and Sell NFTs!
        </div>
        <div className='tf-description'>
          The upcoming NFT Marketplace for artist worldwide! Make sure to upload your NFTs using the newley found marketplace!

        </div>
        <div className='tf-left-btn'>
        <a href="https://marketplace-benjcrpy.vercel.app/buy" className="tf-button-link">
        <Button btnType='PRIMARY' btnText='BROWSE'   />
        </a>
        <a href="https://thirdweb.com/mumbai/0xB0Debc1FB8c9480c21d8A9f8498cCA08A08b7539/direct-listings" className="tf-button-link">
        <Button btnType='SECONDARY' btnText='CREATE' customClass='tf-left-secondary-btn' />
        </a>
        </div>
        
      
      </div>
      <div className='tf-right'>
          <div className='tf-r-diamond-item'>
          <img 
          className='tf-r-diamond-img' 
          width={500}
          height={500}
          alt="diamond-banner"
          src={homepage}
          >
          </img>

          </div>

        </div>
       
    </div>
  
}

export default TopFold