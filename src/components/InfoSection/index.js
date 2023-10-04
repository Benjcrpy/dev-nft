import React from 'react'
import "./infoSection.css"
import { INFO_ITEMS } from '../../data/infoItems'
import InfoItem from './InfoItem'
const InfoSection
 = () => {
  return <div className='info-section'>
    <div className='is-heading absolute-center'> 
      <span className='heading-gradient'>List and Sell your NFT</span>
      </div>
      <div className='is-item-container'>
        {INFO_ITEMS.map((_infoItem)=>(
        <InfoItem item={_infoItem}/>))}
      </div>
    </div> 
}

export default InfoSection
