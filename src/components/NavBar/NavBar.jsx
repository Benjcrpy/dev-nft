// JavaScript
import React, { useState } from "react";
import "./NavBar.css";
import { Logo } from "./index";
import Button from '../../common/Button';
import AboutUs from "../AboutUs";
import TopFold from "../TopFold";
import Vision from "../Vision";

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
      <div className="navbtn" onClick={handleNavButtonClick}>
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
      </div>
      <div className="goto">
        <a href="#">
          <Button btnType='PRIMARY' btnText='Go-to'/>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
