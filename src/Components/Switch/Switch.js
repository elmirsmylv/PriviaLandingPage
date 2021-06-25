import React, { useState } from "react";
import { base, circle, circleClicked } from "./Switch.module.scss";

export const Switch = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <div onClick={clickHandler} className={base}>
      <div className={clicked ? circleClicked : circle}></div>
    </div>
  );
};
