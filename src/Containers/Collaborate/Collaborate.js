import React from "react";
import {
  container,
  subtext,
  rectangle,
  titleSection,
  title,
  subtitle,
  itemList,
  item,
  itemContent,
  itemTitle,
  itemSubtitle,
  graphic,
} from "./Collaborate.module.scss";
import check from "../../images/check.svg";
import CollaborateGraphic from "../../images/CollaboarateGraphic.svg";

const Analytics = () => {
  return (
    <div className={container} id="resources">
      <div className="">
        <div className={subtext}>
          <div className={rectangle}></div>
          <h5>Collaborate</h5>
        </div>
        <div className={titleSection}>
          <p className={title}>Collaborate with your team anytime, anywhere</p>
          <p className={subtitle}>
            Self-service data analytics software that lets you create visually
            appealing data visualizations and insightful dashboards in minutes.
          </p>
        </div>

        <div className={itemList}>
          <div className={item}>
            <img src={check} alt="Analytics" />
            <div className={itemContent}>
              <p className={itemTitle}>Organize your data</p>
            </div>
          </div>
          <div className={item}>
            <img src={check} alt="Analytics" />
            <div className={itemContent}>
              <p className={itemTitle}>Work with any team</p>
            </div>
          </div>
          <div className={item}>
            <img src={check} alt="Analytics" />
            <div className={itemContent}>
              <p className={itemTitle}>Business analytic</p>
            </div>
          </div>
          <div className={item}>
            <img src={check} alt="Analytics" />
            <div className={itemContent}>
              <p className={itemTitle}>Always in sync</p>
            </div>
          </div>
          <div className={item}>
            <img src={check} alt="Analytics" />
            <div className={itemContent}>
              <p className={itemTitle}>Embedded analytic</p>
            </div>
          </div>
        </div>
      </div>

      <div className={graphic}>
        <img src={CollaborateGraphic} alt="Analytics Graphic" />
      </div>
    </div>
  );
};

export default Analytics;
