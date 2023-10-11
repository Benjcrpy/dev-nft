
import React from "react";
import "./NavBar.css";
import {  Logo } from "./index";
import Button from '../../common/Button'
import AboutUs from "../AboutUs";
import TopFold from "../TopFold";
import Vision from "../Vision";

const NavBar = () => {
 return (
    <div className="NavBar">
      <div>
      <Logo />
      </div>
      
      <div className="NavItems">
       <a href={<TopFold/>}> Home </a>
       <a href={<AboutUs/>} > About Us </a>
       <a href={<Vision/>} > Vision </a>
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