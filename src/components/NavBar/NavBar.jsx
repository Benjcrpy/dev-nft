// JavaScript
import React, { useState } from "react";
import "./NavBar.css";
import { Logo } from "./index";
import Button from '../../common/Button';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";



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
        <a href="#infosection">Infosection</a>
        <a href="#product">Product & Services</a>

        

      </div>
      
      <GoogleOAuthProvider clientId="354546675754-l0qb6u36crsh957js7lt54soesom752j.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
            const details = jwtDecode(credentialResponse.credential);
              console.log(details)
                console.log(credentialResponse)
            }}
          onError={() => {
          console.log('Login Failed')
            }} />
      </GoogleOAuthProvider>

      <div className="goto">
        <a href="https://marketplace-benjcrpy.vercel.app/">
          <Button btnType='PRIMARY' btnText='Marketplace'/>
        </a>
      </div>


        

    </div>
  );
};

export default NavBar