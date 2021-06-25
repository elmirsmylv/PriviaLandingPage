import React from "react";
import {
  container,
  subtext,
  rectangle,
  titleSection,
  title,
  features,
  feature,
  featureList,
  featureTitle,
  featureSubtitle,
} from "./MoreFeature.module.scss";
import feature5 from "../../images/feature5.svg";
import feature6 from "../../images/feature6.svg";
import feature7 from "../../images/feature7.svg";
import feature8 from "../../images/feature8.svg";
import feature9 from "../../images/feature9.svg";
import feature10 from "../../images/feature10.svg";

const MoreFeature = () => {
  return (
    <div className={container} id="moreFeature">
      <div className={subtext}>
        <div className={rectangle}></div>
        <h5>More Features</h5>
      </div>
      <div className={titleSection}>
        <p className={title}>
          We're more than an analytic tool. Explore our features, and satisfy
          your customers
        </p>
      </div>
      <div className={features}>
        <div className={featureList}>
          <img src={feature5} alt="Features" />
          <div className={feature}>
            <p className={featureTitle}>Easy customization</p>
            <p className={featureSubtitle}>
              No matter what kind of home you have to share, you can increase
              your earnings.
            </p>
          </div>
        </div>
        <div className={featureList}>
          <img src={feature6} alt="Features" />
          <div className={feature}>
            <p className={featureTitle}>Secure and fast</p>
            <p className={featureSubtitle}>
              No matter what kind of home you have to share, you can increase
              your earnings.
            </p>
          </div>
        </div>
        <div className={featureList}>
          <img src={feature7} alt="Features" />
          <div className={feature}>
            <p className={featureTitle}>Powerful dashboard</p>
            <p className={featureSubtitle}>
              No matter what kind of home you have to share, you can increase
              your earnings.
            </p>
          </div>
        </div>
        <div className={featureList}>
          <img src={feature8} alt="Features" />
          <div className={feature}>
            <p className={featureTitle}>Cloud upload</p>
            <p className={featureSubtitle}>
              No matter what kind of home you have to share, you can increase
              your earnings.
            </p>
          </div>
        </div>
        <div className={featureList}>
          <img src={feature9} alt="Features" />
          <div className={feature}>
            <p className={featureTitle}>Proven Technology</p>
            <p className={featureSubtitle}>
              No matter what kind of home you have to share, you can increase
              your earnings.
            </p>
          </div>
        </div>
        <div className={featureList}>
          <img src={feature10} alt="Features" />
          <div className={feature}>
            <p className={featureTitle}>98.99% satisfaction</p>
            <p className={featureSubtitle}>
              No matter what kind of home you have to share, you can increase
              your earnings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFeature;
