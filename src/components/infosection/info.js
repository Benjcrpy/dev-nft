import React from 'react';
import test2 from "../../assets/info1.png";
import test3 from "../../assets/info2.png";
import test4 from "../../assets/info4.png";
import "./info.css";

const Info = () => {
  return (
    <div className='info'>
      <div className='info-heading absolute-center'>
        infoSection
      </div>
      <div className='info-section'>

        <div className='info-box'>
          <img className="iimg" src={test2} alt='test' />
          <h2 className="head">LOREM LOREM LOREM</h2>
          <p className='descrip'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.</p>
          <p className="info2">New content that appears on hover</p>
        </div>

        <div className='info-box'>
          <img className="iimg" src={test3} alt='test' />
          <h2 className="head">LOREM LOREM LOREM</h2>
          <p className='descrip'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.</p>
          <p className="info2">New content that appears on hover</p>
        </div>

        <div className='info-box'>
          <img className="iimg" src={test4} alt='test' />
          <h2 className="head">LOREM LOREM LOREM</h2>
          <p className='descrip'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.</p>
          <p className="info2">New content that appears on hover</p>
        </div>

        

      </div>
    </div>
  )
}

export default Info;
