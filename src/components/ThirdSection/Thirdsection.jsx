import React from "react";
import style from "../ThirdSection/Thirdsection.module.css";
import Bodyvalues from "../GeneralElements/Bodyvalues/Bodyvalues";

function Thirdsection() {
  return (
    <div>
      <div className={style.container}>
        <div className={style.headline_box}>
          <h1>Here’s what you can expect</h1>
          <p>Your body change estimations</p>
        </div>
        <div className={style.flex_container}>
          <div className={style.flex_item}>
            <Bodyvalues />
          </div>
          <div className={`${style.flex_item} ${style.position}`}>
            <div className={style.text_aligner}>
              <h2 className="green_heading">
                Get ready to change your jeans size!
              </h2>
              <p>
                Top performing users changed 2 sizes in 1 month. Prepare your
                skinny&nbsp;jeans&nbsp;back!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Thirdsection;
