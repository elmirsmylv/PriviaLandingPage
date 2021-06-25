import React from "react";
import { logoSection, content, item, social } from "./Footer.module.scss";
import Logo from "../../images/Logo.svg";
import Twitter from "../../images/Twitter.svg";
import Facebook from "../../images/Facebook.svg";
import Linkedin from "../../images/Linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <div className={content}>
        <div className={item}>
          <h3>Product</h3>
          <p>Landingpage</p>
          <p>Features</p>
          <p>Documentation</p>
          <p>Referral program</p>
          <p>Pricing</p>
        </div>
        <div className={item}>
          <h3>Services</h3>
          <p>Documentation</p>
          <p>Design</p>
          <p>Themes</p>
          <p>Illustrations</p>
          <p>UI Kit</p>
        </div>
        <div className={item}>
          <h3>Company</h3>
          <p>About</p>
          <p>Terms</p>
          <p>Privacy Policy</p>
          <p>Careers</p>
        </div>
        <div className={item}>
          <h3>More</h3>
          <p>Documentation</p>
          <p>License</p>
          <p>Changelog</p>
        </div>
      </div>
      <hr />
      <div className={logoSection}>
        <img src={Logo} alt="Privia Security" />
        <div className={social}>
          <img src={Twitter} alt="Twitter" />
          <img src={Facebook} alt="Facebook" />
          <img src={Linkedin} alt="Linkedin" />
        </div>
        <span>&#169;2021 Privia</span>
      </div>
    </footer>
  );
};

export default Footer;
