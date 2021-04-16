import React from "react";
import style from "../Calories/Calories.module.css";
import fire_rr from "../../assets/this_is_fire.svg";

function Calories({ dailyCalories }) {
  return (
    <div>
      <div className={style.flex_container}>
        <h3 className="personal_attributes">Your daily calorie intake</h3>
        <hr />
      </div>
      <div className={`${style.flex_container} ${style.extended}`}>
        <div className={style.flex_item_1}>
          <img className={style.fire_img} src={fire_rr} alt="" />
          <p className={`${style.result_2}`}>
            <span className="result_additional">
              Recommended to achieve your&nbsp;goals
            </span>
            <br />
            <span className={style.balance_result}>{dailyCalories} kcal</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Calories;
