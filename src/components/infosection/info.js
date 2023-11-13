import React from 'react';
import test2 from "../../assets/info1.png";
import test3 from "../../assets/info2.png";
import test4 from "../../assets/info4.png";
import "./info.css";

const Info = () => {
  return (
    <div className='info'>
      <div className='info-heading absolute-center' section id="infosection">
        infoSection
      </div>
      <div className='info-section'>

        <div className='info-box'>
          <img className="iimg" src={test2} alt='test' />
          <h2 className="head">Direct Listing</h2>
          <p className='descrip'>Direct listing allows NFT creators or sellers to list their digital assets for sale on your platform without going through an auction process. </p>
          <p className="info2">It's a straightforward way for sellers to put their NFTs up for purchase, and buyers can browse and purchase directly.</p>
        </div>

        <div className='info-box'>
          <img className="iimg" src={test3} alt='test' />
          <h2 className="head">Auction Listing </h2>
          <p className='descrip'>Your NFT marketplace is given a dynamic and competitive boost via auctions. </p>
          <p className="info2">Buyers can put bids until the auction closes, while NFT developers can establish a reserve price and a time limit.</p>
        </div>

        <div className='info-box'>
          <img className="iimg" src={test4} alt='test' />
          <h2 className="head">Contracts</h2>
          <p className='descrip'>Smart contracts are the backbone of NFT marketplaces, ensuring the security and transparency of NFT transactions. Contracts facilitate the creation, transfer, and management of NFTs. Key contract-related features include
          </p>
          <p className="info2">Ownership and transfer: Smart contracts should record and manage ownership and enable secure transfers of NFTs between users.
            Royalties: Support royalty mechanisms that automatically compensate creators when NFTs are resold.</p>
        </div>

        

      </div>
    </div>
  )
}

export default Info;
