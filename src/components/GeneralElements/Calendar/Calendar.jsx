import React from "react";
import style from "../Calendar/Calendar.module.css";

function Calendar() {
  let weekDays = [
    {
      dayName: "Mon",
      dayCount: 1,
    },
    {
      dayName: "Tue",
      dayCount: 2,
    },
    {
      dayName: "Wed",
      dayCount: 3,
    },
    {
      dayName: "Thu",
      dayCount: 4,
    },
    {
      dayName: "Fri",
      dayCount: 5,
    },
    {
      dayName: "Sat",
      dayCount: 6,
    },
    {
      dayName: "Sun",
      dayCount: 7,
    },
  ];
  return (
    <div className={style.calendar__box}>
      <div className={style.calendar_box_row}>
        {weekDays.map((el) => (
          <div className={style.day_number} key={el.dayCount}>
            <span className={style.weekday}>{el.dayName}</span>
            <span className={style.daycount}>{el.dayCount}</span>
          </div>
        ))}
      </div>
      <div>
        <div className={style.kilo_main}>
          <span>
            -5<span className={style.description}>kg</span>
          </span>
          <p className={style.text}>After first week</p>
        </div>
      </div>
    </div>
  );
}
export default Calendar;
{
}
