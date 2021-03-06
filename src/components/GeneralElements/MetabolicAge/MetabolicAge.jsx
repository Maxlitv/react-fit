import React from "react";
import style from "../MetabolicAge/Metabolic.module.css";
import meta_age from "../../assets/meta_age.svg";

function MetabolicAge({ metaAge }) {
  return (
    <div>
      <div className={style.flex_container}>
        <h3 className="personal_attributes">Your metabolic age</h3>
        <hr />
      </div>
      <div className={`${style.flex_container} ${style.extended}`}>
        <div className={style.flex_item_1}>
          <img className={style.meta_age} src={meta_age} alt="" />
          <p className={`${style.result_2}`}>
            <span className="result_additional">
              Slightly higher than your actual&nbsp;age
            </span>
            <br />
            <span className={style.balance_result}>{metaAge} years</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default MetabolicAge;
