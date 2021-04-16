import React from "react";
import style from "../Bmi/Bmi.module.css";

function Bmi() {
  return (
    <div>
      <div className={style.flex_container}>
        <h3 className="personal_attributes">Your BMI</h3>
        <hr />
        <p className="result">55.56</p>
        put
        <input
          className={style.rangeInput}
          type="range"
          min="0"
          max="100"
          //   release value to make slider dynamic
          //   remove "readonly" to unlock input
          readOnly
          value="80"
        ></input>
      </div>
    </div>
  );
}
export default Bmi;
