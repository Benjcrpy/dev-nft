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
        <a href="#top-fold">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#vision">Vision</a>
        <a href="#vision">Infosection</a>
        <a href="#vision">Product & Services</a>
      </div>
      <div className="goto">
        <a href="https://marketplace-benjcrpy.vercel.app/">
          <Button btnType='PRIMARY' btnText='Go-to'/>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
