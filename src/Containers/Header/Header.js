import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  container,
  buttons,
  button1,
  button2,
  titleSection,
  dashboard,
} from "./Header.module.scss";
import dashboardImg from "../../images/Dashboard.svg";

const Header = () => {
  return (
    <header className={container}>
      <Navbar />
      <div className={titleSection}>
        <h1>Powerfull analytics tools for your business</h1>
        <h2>
          Millions of people are searching for jobs, salary information, company
          reviews, and interview questions. See what others are looking for on
          Oval today.
        </h2>
      </div>
      <div className={buttons}>
        <button className={button1}>Start free trial</button>
        <button className={button2}>View live demo</button>
      </div>
      <div className={dashboard}>
        <img src={dashboardImg} alt="Analytic Dashboard" />
      </div>
    </header>
  );
};

export default Header;
