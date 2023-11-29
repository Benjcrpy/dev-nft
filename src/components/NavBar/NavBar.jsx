// JavaScript
import React, { useState } from "react";
import "./NavBar.css";
import { Logo } from "./index";
import Button from '../../common/Button';




const NavBar = () => {


  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavButtonClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (

    <div className={`NavBar ${isNavOpen ? 'open' : ''}`}>

      <div className="logo">
        <Logo />
      </div>
      <div className="nav-btn" onClick={handleNavButtonClick}>
        {isNavOpen ? (
          <>
            <div className="close"></div>
            <div className="close"></div>
          </>
        ) : (
          <>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </>
        )}

        

      </div>
      <div className="NavItems">
        <a className="text" href="#top-fold">Home</a>
        <a className="text1" href="#vision">Vision</a>
        <a className="text2" href="#infosection">Infosection</a>
        <a className="text3" href="#product">Product & Services</a>
        <a className="text4" href="#About">About Us</a>
        <a className="text5" href="#Support">Support</a>
      </div>

      <div className="goto">
        <a href="https://marketplace-benjcrpy.vercel.app/">
          <Button btnType='PRIMARY' btnText='Marketplace'/>
        </a>
      </div>

    </div>
  );
};

export default NavBar