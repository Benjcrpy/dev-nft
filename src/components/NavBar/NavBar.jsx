
import React from "react";
import "./NavBar.css";
import {  Logo } from "./index";
import Button from '../../common/Button'

const NavBar = () => {
 return (
    <div className="NavBar">
      <div>
      <Logo />
      </div>
      
      <div className="NavItems">
       <a href="/" target="_blank"> Home </a>
       <a href="/about" target="_blank"> About Us </a>
       <a href="/vision" target="_blank"> Vision </a>
      </div>
      <div className="goto">
      <Button btnType='PRIMARY' btnText='Go-to'/>
     
      </div>
    </div>
 );
};

export default NavBar;