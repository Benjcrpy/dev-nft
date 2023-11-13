import React from 'react'
import "./product.css"
import test1 from "../../assets/pro1.png"
const Product = () => {
  return (<div className='product absolute-center'>
   <div className='product-left absolute-center'>
        <div className='product-heading'>
          Product & Services
        </div>
        <div className='product-description' section id="product">
        Our primary offering, the NFT Trading Platform, enables customers to buy, 
        sell, and trade NFTs. Users can find and purchase digital assets, such as 
        music, real estate online, and more.
        Support for Creators: We provide tools and resources to enable 
        content producers like as musicians, game developers, and artists to tokenize 
        and sell their works as NFTs. This covers how-to manuals, legal assistance, and advertising services.
        Benefits for Collectors: Collectors can take part in auctions, 
        check provenance information, and make sure their NFTs are real. 
        
        </div>
      </div>
      <div className='product-right'>
        <div className='product-right-diamond'>
          <div className='product-right-item'>
            <span style={{ '--i': '1' }}>
              <img
                className='p-img'
                alt="au-img"
                src={test1}
              ></img>
            </span>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Product