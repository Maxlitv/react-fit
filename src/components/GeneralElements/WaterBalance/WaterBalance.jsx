import React from "react";
import style from "../WaterBalance/WaterBalance.module.css";
import water_drop from "../../assets/water_drop.svg";

function WaterBalance() {
  return (
    <div>
      <div className={style.flex_container}>
        <h3 className="personal_attributes">Your water balance</h3>
        <hr />
      </div>
      <div className={`${style.flex_container} ${style.extended}`}>
        <div className={style.flex_item_1}>
          <img className={style.water_drop} src={water_drop} alt="" />
          <p className={`${style.result_2}`}>
            <span className="result_additional">Your daily minimum is</span>
            <br />
            <span className={style.balance_result}>1.7L</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default WaterBalance;
