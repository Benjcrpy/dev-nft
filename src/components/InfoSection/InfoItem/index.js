import React from 'react';
import "./infoItem.css";

const InfoItem = ({ item }) => {
  return (
    <div className='info-item absolute-center' key={item.id}>
      <img src={item.icon} alt={item.section_title} className='ii-icon' />
      <h2 className='ii-title'>{item.section_title}</h2>
      <p className='ii-description'>{item.description}</p>
    </div>
  );
};

export default InfoItem;
