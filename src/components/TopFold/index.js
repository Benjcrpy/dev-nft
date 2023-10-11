
import './topFold.css';
import Button from '../../common/Button';
import homepage from '../../assets/homepage.png';
import Vision from '../Vision/index'
import AboutUs from '../AboutUs';

const TopFold = () => {

  return <div className={`topfold absolute-center`}>
      <div className='tf-left'>

        <div className='tf-heading'>
          Browse, Bid, Create and Sell NFTs!
        </div>
        <div className='tf-description'>
          The upcoming NFT Marketplace for artist worldwide! Make sure to upload your NFTs using the newley found marketplace!

        </div>
        <div className='tf-left-btns'>
        <a href={<AboutUs/>}>
        <Button btnType='PRIMARY' btnText='BROWSE'   />
        </a>
        <a href={<Vision/>}>
        <Button btnType='SECONDARY' btnText='CREATE' customClass='tf-left-secondary-btn' />
        </a>
        </div>
        <div className='tf-left-infoStats absolute-center'>
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
          <div className='tf-r-diamond-item'>
          <img 
          className='tf-r-diamond-img' 
          alt="diamond-banner"
          src={homepage}
          >
          </img>
          
          

          </div>

        </div>
       
    </div>
  
}

export default TopFold