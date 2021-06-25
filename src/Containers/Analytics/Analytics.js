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
} from "./Analytics.module.scss";
import analyticIcon1 from "../../images/analyticIcon1.svg";
import analyticIcon2 from "../../images/analyticIcon2.svg";
import AnalyticsGraphic from "../../images/AnalyticsGraphic.svg";

const Analytics = () => {
  return (
    <div className={container} id="product">
      <div className="">
        <div className={subtext}>
          <div className={rectangle}></div>
          <h5>Analytics</h5>
        </div>
        <div className={titleSection}>
          <p className={title}>Analyze your data with our analyze tools</p>
          <p className={subtitle}>
            We are self-service data analytics software that lets you create
            visually appealing data visualizations and insightful dashboards in
            minutes.
          </p>
        </div>

        <div className={itemList}>
          <div className={item}>
            <img src={analyticIcon1} alt="Analytics" />
            <div className={itemContent}>
              <p className={itemTitle}>Powerful dashboard</p>
              <p className={itemSubtitle}>
                Combine multiple reports into a single beautiful dashboard.
              </p>
            </div>
          </div>
          <div className={item}>
            <img src={analyticIcon2} alt="Analytics" />
            <div className={itemContent}>
              <p className={itemTitle}>Always in sync</p>
              <p className={itemSubtitle}>
                Don’t worry about the data, always be synchronized
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={graphic}>
        <img src={AnalyticsGraphic} alt="Analytics Graphic" />
      </div>
    </div>
  );
};

export default Analytics;
