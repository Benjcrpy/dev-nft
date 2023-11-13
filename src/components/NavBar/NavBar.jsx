// JavaScript
import React, { useState } from "react";
import "./NavBar.css";
import { Logo } from "./index";
import Button from '../../common/Button';
import { GoogleLogin } from 'react-google-login';

const clientId = '281512926615-qai9kh5q8e3coka2c7dalb21ssrqjgj2.apps.googleusercontent.com';
const NavBar = () => {
  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    // You can handle the successful login here, e.g., set user state or perform additional actions.
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failure:', error);
    // You can handle the login failure here, e.g., show an error message.
  };
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
      <div className="login">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={'single_host_origin'}
      />
      </div>
      <div className="goto">
        <a href="https://marketplace-benjcrpy.vercel.app/">
          <Button btnType='PRIMARY' btnText='Marketplace'/>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
