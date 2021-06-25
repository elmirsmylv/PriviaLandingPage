import React from "react";
import {
  container,
  features,
  title,
  subtitle,
  button,
  disabled,
} from "./Standart.module.scss";
import check from "../../../images/check.svg";

export const Standart = ({ styleProp }) => {
  //style={styleProp == 1 ? {} : { display: "none" }}
  return (
    <div className={styleProp == 1 ? container : disabled}>
      <h3>
        &#36;23 <span>/monthly</span>
      </h3>
      <h4 className={title}>Standart</h4>
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
      </div>
      <div className={button}>
        <button>Start free trial</button>
      </div>
    </div>
  );
};
