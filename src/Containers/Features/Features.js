import React from "react";
import {
  container,
  subtext,
  rectangle,
  titleSection,
  title,
  subtitle,
  features,
  feature,
  featureList,
  featureTitle,
  featureSubtitle,
  learnMore,
  arrow,
  hr,
} from "./Features.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import feature1 from "../../images/feature1.svg";
import feature2 from "../../images/feature2.svg";
import feature3 from "../../images/feature3.svg";
import feature4 from "../../images/feature4.svg";

const Features = () => {
  return (
    <div className={container} id="about">
      <div className={subtext}>
        <div className={rectangle}></div>
        <h5>Features</h5>
      </div>
      <div className={titleSection}>
        <p className={title}>Our solution for your business</p>
        <p className={subtitle}>
          We are self-service data analytics software that lets you create
          visually appealing data visualizations and insightful dashboards in
          minutes.
        </p>
      </div>
      <div className={features}>
        <div className={featureList}>
          <img src={feature1} alt="Features" />
          <div className={feature}>
            <p className={featureTitle}>Analyze your data</p>
            <p className={featureSubtitle}>
              Create reports with an easy to use drag-and-drop designer.
            </p>
            <div className={learnMore}>
              <a href="#learnmore">Learn more</a>
              <FontAwesomeIcon icon={faChevronRight} className={arrow} />
            </div>
          </div>
        </div>
        <div className={featureList}>
          <img src={feature2} alt="Features" />
          <div className={feature}>
            <p className={featureTitle}>Embedded analytics</p>
            <p className={featureSubtitle}>
              Get a powerful analytics tool in your own brand name.
            </p>
            <div className={learnMore}>
              <a href="#learnmore">Learn more</a>
              <FontAwesomeIcon icon={faChevronRight} className={arrow} />
            </div>
          </div>
        </div>
        <div className={featureList}>
          <img src={feature3} alt="Features" />
          <div className={feature}>
            <p className={featureTitle}>Collaborate securely</p>
            <p className={featureSubtitle}>
              Share/publish your reports with your colleagues.
            </p>
            <div className={learnMore}>
              <a href="#learnmore">Learn more</a>
              <FontAwesomeIcon icon={faChevronRight} className={arrow} />
            </div>
          </div>
        </div>
        <div className={featureList}>
          <img src={feature4} alt="Features" />
          <div className={feature}>
            <p className={featureTitle}>Easy and Intuitive</p>
            <p className={featureSubtitle}>
              Easily converse with your data using everyday language.
            </p>
            <div className={learnMore}>
              <a href="#learnmore">Learn more</a>
              <FontAwesomeIcon icon={faChevronRight} className={arrow} />
            </div>
          </div>
        </div>
      </div>
      <div className={hr}></div>
    </div>
  );
};

export default Features;
