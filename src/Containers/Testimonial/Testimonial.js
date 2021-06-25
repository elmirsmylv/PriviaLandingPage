import React from "react";
import {
  container,
  company,
  companyIcons,
  examples,
  testiExample,
  profile,
  name,
  firstName,
  lastName,
  companyLogo,
  testi,
  seeAll,
  arrow,
} from "./Testimonial.module.scss";
import slack from "../../images/slack.svg";
import hubspot from "../../images/hubspot.svg";
import square from "../../images/square.svg";
import serviceTitan from "../../images/serviceTitan.svg";
import cogni from "../../images/cogni.svg";
import grubhub from "../../images/grubhub.svg";
import shopify from "../../images/shopify.svg";
import airbnb from "../../images/airbnb.svg";
import avatar1 from "../../images/avatar1.svg";
import avatar2 from "../../images/avatar2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <div className={container} id="customers">
      <div className={company}>
        <p>More than 1.8 million people across 50,000 companies choose Oval</p>
        <div className={companyIcons}>
          <img src={slack} alt="Company Icon" />
          <img src={hubspot} alt="Company Icon" />
          <img src={square} alt="Company Icon" />
          <img src={serviceTitan} alt="Company Icon" />
          <img src={cogni} alt="Company Icon" />
          <img src={grubhub} alt="Company Icon" />
        </div>
      </div>
      <div className={examples}>
        <div className={testiExample}>
          <img className={companyLogo} src={shopify} alt="Shopify" />
          <p className={testi}>
            I received great customer service from the specialists who helped
            me. I would recommend to anyone who wants great dashboard that has
            great quality.
          </p>
          <div className={profile}>
            <img src={avatar1} alt="Avatar" />
            <div className={name}>
              <p className={firstName}>Harold Tyler</p>
              <p className={lastName}>Product Designer</p>
            </div>
          </div>
        </div>
        <div className={testiExample}>
          <img className={companyLogo} src={airbnb} alt="Airbnb" />
          <p className={testi}>
            My experience with this platform so far has been great. Everything
            is easy, from creating visualization, scheduling, collaboration and
            many more.
          </p>
          <div className={profile}>
            <img src={avatar2} alt="Avatar" />
            <div className={name}>
              <p className={firstName}>Ryan Holmes</p>
              <p className={lastName}>Motion deigner / animator</p>
            </div>
          </div>
        </div>
      </div>
      <div className={seeAll}>
        <p> See all testimonial</p>
        <FontAwesomeIcon icon={faChevronRight} className={arrow} />
      </div>
    </div>
  );
};

export default Testimonial;
