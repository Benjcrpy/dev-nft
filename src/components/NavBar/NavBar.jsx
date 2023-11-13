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

  const handleSmoothScroll = () => {
    // Add the "smooth-scroll" class to the body for smooth scrolling
    document.body.classList.add("smooth-scroll");

    // Remove the "smooth-scroll" class after scrolling is complete
    setTimeout(() => {
      document.body.classList.remove("smooth-scroll");
    }, 1000); // Adjust the delay (in milliseconds) to match your transition duration
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
        <a href="#top-fold" onClick={handleSmoothScroll}>Home</a>
        <a href="#about-us" onClick={handleSmoothScroll}>About Us</a>
        <a href="#vision" onClick={handleSmoothScroll}>Vision</a>
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
