import React from "react";
import style from "../FirstSection/FirstSection.module.css";
import MainCta from "../GeneralElements/MainCta.jsx";
import Graph from "../GeneralElements/Graph.jsx";
import Calendar from "../GeneralElements/Calendar/Calendar.jsx";
import Kilos from "../GeneralElements/Kilos/Kilos.jsx";

function FirstSection({ store }) {
  return (
    <div className={style.flex_container}>
      <div className={style.flex_item}>
        <div className={style.main_headline}>
          <h1>
            Based on your answers, you can
            <span className={style.props_please}>
              {" "}
              lose {store.Pounds}lbs
            </span>{" "}
            in 1 month
          </h1>
          <p className={style.sub_text}>
            We’ve evaluated your answers and prepared a summary out of 10.243
            people similar to you
          </p>
          <MainCta />
        </div>
      </div>
      <div className={style.flex_item_next}>
        <Graph />
        <div className={style.flex_item_3}>
          <Kilos LostKgs={store.LostKgs} />
          <Calendar calendarData={store.calendarData} />
        </div>
      </div>
    </div>
  );
}
export default FirstSection;
