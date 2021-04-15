import React from "react";
import style from "../Bodyvalues/Bodyvalues.module.css";
import full_body from "../../assets/full_body.svg";

function Bodyvalues() {
  return (
    <div>
      <div className={style.flex_container}>
        <div className={style.flex_item}>
          <img src={full_body} alt="" srcset="" />
        </div>
        {/* <div className={style.flex_item}></div> */}
      </div>
    </div>
  );
}

export default Bodyvalues;
