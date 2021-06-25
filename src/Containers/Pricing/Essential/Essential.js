import React from "react";
import {
  container,
  features,
  title,
  subtitle,
  button,
  disabled,
} from "./Essential.module.scss";
import check from "../../../images/check.svg";

export const Essential = ({ styleProp }) => {
  return (
    <div className={styleProp == 2 ? container : disabled}>
      <h3>
        &#36;99 <span>/monthly</span>
      </h3>
      <h3 className={title}>Essentials</h3>
      <p className={subtitle}>
        Better for growing businesses that want more customers.
      </p>
      <hr />
      <div className={features}>
        <p>
          <img src={check} alt="Check" />
          Unlimited project use
        </p>
        <p>
          <img src={check} alt="Check" />
          Advanced dashboard
        </p>
        <p>
          <img src={check} alt="Check" />
          All components included
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
