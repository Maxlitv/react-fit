import React from "react";
import style from "../GeneralElements/Graph.module.css";

function Graph() {
  let graphNumbers = new Array(10).fill(1).map((_, i) => i + 50);
  return (
    <div className={style.graph__box}>
      <div className={style.graph_number_box}>
        {graphNumbers.map((el, i) => (
          <span className={style.graph_number} key={i}>
            {el}
          </span>
        ))}
      </div>
    </div>
  );
}
export default Graph;
