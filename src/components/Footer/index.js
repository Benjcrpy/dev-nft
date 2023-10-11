import React from "react";

import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
 
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

// INTERNAL IMPORTS
import Style from "./Footer.module.css";


const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
         
          <p className="FooterP">
            The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
            Buy, sell, and discover exclusive digital items.
          </p>

          {/* Social Section */}
          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        {/* Menu Section */}
        <div className={Style.footer_box_discover}>
          <h3>Discover</h3>
          <a href="#">  <p className="FooterP"> Listing</p> </a>
          <a href="#">  <p className="FooterP">Sell</p> </a>
          <a href="#">  <p className="FooterP">Buy</p> </a> 
          <a href="#">  <p className="FooterP">Direct Listing</p> </a>
        </div>

        <div className={Style.footer_box_helpcenter}>
          <h3>Help Center</h3>
          <a href="#"> <p className="FooterP">Terms and Condition </p> </a>
          <a href="#"> <p className="FooterP">Security</p> </a>
          <a href="#"> <p className="FooterP">Blockchain</p> </a>
            
        </div>

        {/* Subscribe Section */}
        <div className={Style.subscribe}>
          <h3>Subscribe</h3>
            
          <div className={Style.subscribe_box}>
            <input type="email" placeholder="Enter your email *" />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>

          <div className={Style.subscribe_box_info}>
            <p className="FooterP"> 
                @{new Date().getFullYear()} HTF. All right reseved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;