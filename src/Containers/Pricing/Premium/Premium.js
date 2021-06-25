import React from "react";
import {
  container,
  features,
  title,
  subtitle,
  button,
  disabled,
} from "./Premium.module.scss";
import check from "../../../images/check.svg";

export const Premium = ({ styleProp }) => {
  return (
    <div className={styleProp == 3 ? container : disabled}>
      <h3>
        &#36;139 <span>/monthly</span>
      </h3>
      <h3 className={title}>Premium</h3>
      <p className={subtitle}>
        All the basics for businesses that are just getting started.
      </p>
      <hr />
      <div className={features}>
        <p>
          <img src={check} alt="Check" />
          Single project use
        </p>
        <p>
          <img src={check} alt="Check" />
          Basic dashboard
        </p>
        <p>
          <img src={check} alt="Check" />
          All component included
        </p>
        <p>
          <img src={check} alt="Check" />
          Advanced inside
        </p>
      </div>
      <div className={button}>
        <button>Start free trial</button>
      </div>
    </div>
  );
};
