import React from "react";
import style from "../SecondSection/SecondSection.module.css";
import Bmi from "../GeneralElements/Bmi/Bmi";
import WaterBalance from "../GeneralElements/WaterBalance/WaterBalance";
import MetabolicAge from "../GeneralElements/MetabolicAge/MetabolicAge";
import Calories from "../GeneralElements/Calories/Calories";
import store from "../../data";

function SecondSection({ store }) {
  return (
    <div>
      <div className={`${style.flex_container} ${style.section_break}`}>
        <h1>Personal summary</h1>
      </div>
      <div className={style.flex_container}>
        <div className={style.flex_item}>
          <Bmi bmiData={store.bmiData} />
        </div>
        <div className={`${style.flex_item} ${style.water_mobile}`}>
          <WaterBalance waterBalance={store.waterBalance} />
        </div>
        <div className={`${style.flex_item} ${style.meta_mobile}`}>
          <MetabolicAge metaAge={store.metaAge} />
        </div>
        <div className={`${style.flex_item} ${style.calories_mobile}`}>
          <Calories dailyCalories={store.dailyCalories} />
        </div>
      </div>
    </div>
  );
}
export default SecondSection;
