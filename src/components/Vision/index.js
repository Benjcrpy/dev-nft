import React from 'react'
import "./infoSection.css"
import homepage from "../../assets/test.jpg"

const Vision = () => {
  return <div className='vision'section id="about-us">
    
    <div className='vision-heading absolute-center'>
      About Us
    </div>
   <div className="container">
  <div className="box">
    <div className="imgBx">
      <img src={homepage} alt="imgvision"/>
    </div>
    <div className="content">
      <div>
        <h2>Denzel Joy Serano</h2>
        <p>Product Lead
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx">
    <img src={homepage} alt="imgvision"/>
       </div>
    <div className="content">
      <div>
        <h2>Anthony Agapay</h2>
        <p>Lead Developer
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx">
    <img src={homepage} alt="imgvision"/>
       </div>
    <div className="content">
      <div>
        <h2>George Marquez</h2>
        <p> Co-Developer
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx">
    <img src={homepage} alt="imgvision"/>
       </div>
    <div className="content">
      <div>
        <h2>Enrico</h2>
        <p> Project Manager
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx">
    <img src={homepage} alt="imgvision"/>
       </div>
    <div className="content">
      <div>
        <h2>Kirby Sembrano</h2>
        <p> Documention
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx">
    <img src={homepage} alt="imgvision"/>
       </div>
    <div className="content">
      <div>
        <h2>Lasim</h2>
        <p>Documention
        </p>
      </div>
    </div>
  </div>
  
  
</div>

</div>
}
export default Vision