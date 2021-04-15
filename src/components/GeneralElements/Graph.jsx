import React from "react";
import style from "../GeneralElements/Graph.module.css";
import graph_desktop from "../assets/green_graph_desktop.svg";
import graph_mob from "../assets/graph_mobile.svg";

function Graph() {
  let graphNumbers = new Array(20).fill(1).map((_, i) => i + 50);
  let centralNumber = graphNumbers[2];
  // console.log(graphNumbers);
  return (
    <div className={style.graph__box}>
      <div className={style.graph_number_box}>
        {graphNumbers.map((el, i) => (
          <span className={style.graph_number} key={i}>
            {el}
          </span>
        ))}
      </div>
      <div className={style.graph_img}>
        <img src={graph_desktop} alt="" />
      </div>
      <div className={style.graph_img_mob}>
        <img src={graph_mob} alt="" />
      </div>
    </div>
  );
}
export default Graph;
