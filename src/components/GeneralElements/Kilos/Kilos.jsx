import React from "react";
import style from "../Kilos/Kilos.module.css";

function Kilos() {
  return (
    <div className={style.kilos_box}>
      <span className={style.kilo_main}>
        87<span className={style.percentage}>%</span>
      </span>
      <p>
        Similar people <span>lost</span> more than <span>10kg</span> on Fitter
      </p>
    </div>
  );
}
export default Kilos;
