import React from 'react'
import "./Logo.css"
import image from "../../../assets/htf.png"
const Logo = () => {
  return (
    <div>
      <img src={image} alt="Logo" className="nav-logo" /> 
      </div>
  )
}

export default Logo