import React from 'react'
import "./infoSection.css"
import denzel from "../../assets/panget.jpg"
import anthony from "../../assets/anthony.png"
import george from "../../assets/george.png"
import enrico from "../../assets/ems.jpg"
import kirby from "../../assets/kirby.jpg"
import lasim from "../../assets/Lasim.jpg"

const Vision = () => {
  return <div className='vision'section id="about-us">
    
    <div className='vision-heading absolute-center'>
      About Us
    </div>
   <div className="container">
  <div className="box">
    <div className="imgBx">
      <img src={denzel} alt="imgvision"/>
    </div>
    <div className="content">
      <div>
        <h2>Denzel Joy Serrano</h2>
        <p> Project Manager
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx">
    <img src={anthony} alt="imgvision"/>
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
    <img src={george} alt="imgvision"/>
       </div>
    <div className="content">
      <div>
        <h2>George Marquez</h2>
        <p> Developer
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx">
    <img src={enrico} alt="imgvision"/>
       </div>
    <div className="content">
      <div>
        <h2>Enrico Lozada</h2>
        <p> Quality Assurance 
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx">
    <img src={kirby} alt="imgvision"/>
       </div>
    <div className="content">
      <div>
        <h2>Kirby Sembrano</h2>
        <p>  System Architect
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx">
    <img src={lasim} alt="imgvision"/>
       </div>
    <div className="content">
      <div>
        <h2>Kristella Lasim</h2>
        <p>UX Designer
        </p>
      </div>
    </div>
  </div>
  
  
</div>

</div>
}
export default Vision