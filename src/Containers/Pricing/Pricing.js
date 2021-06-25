import React, { useState } from "react";
import {
  container,
  titleSection,
  billMonthly,
  subtitle,
  cards,
  cardTitles,
  active,
} from "./Pricing.module.scss";
import save from "../../images/save.svg";
import { Switch } from "../../Components/Switch/Switch";
import { Standart } from "./Standart/Standart";
import { Essential } from "./Essential/Essential";
import { Premium } from "./Premium/Premium";

const Pricing = () => {
  const [card, setCard] = useState(1);

  useState(() => {
    setCard(1);
  }, []);

  return (
    <div className={container} id="pricing">
      <div className={titleSection}>
        <h2>Choose the plan that’s right for your business</h2>
        <p className={subtitle}>
          30-day free trial, cancel any time. No credit card required.
        </p>
        <div className={billMonthly}>
          <p>Bill monthly</p>
          <Switch />
          <p>
            Bill annually <img src={save} alt="Save 15%" />
          </p>
        </div>
      </div>
      <div className={cardTitles}>
        <p className={card == 1 ? active : ""} onClick={() => setCard(1)}>
          Standart
        </p>
        <p className={card == 2 ? active : ""} onClick={() => setCard(2)}>
          Essentials
        </p>
        <p className={card == 3 ? active : ""} onClick={() => setCard(3)}>
          Premium
        </p>
      </div>
      <div className={cards}>
        <Standart styleProp={card} />
        <Essential styleProp={card} />
        <Premium styleProp={card} />
      </div>
    </div>
  );
};

export default Pricing;
