import React from "react";
import style from "../SecondSection/SecondSection.module.css";
import Bmi from "../GeneralElements/Bmi/Bmi";
import WaterBalance from "../GeneralElements/WaterBalance/WaterBalance";
import MetabolicAge from "../GeneralElements/MetabolicAge/MetabolicAge";

function SecondSection() {
  return (
    <div>
      <div className={`${style.flex_container} ${style.section_break}`}>
        <h1>Personal summary</h1>
      </div>
      <div className={style.flex_container}>
        <div className={style.flex_item}>
          <Bmi />
        </div>
        <div className={style.flex_item}>
          <WaterBalance />
        </div>
        <div className={style.flex_item}>
          <MetabolicAge />
        </div>
        <div className={style.flex_item}></div>
      </div>
    </div>
  );
}
export default SecondSection;
