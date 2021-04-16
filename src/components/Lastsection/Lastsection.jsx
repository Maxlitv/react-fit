import React from "react";
import style from "../Lastsection/Lastsection.module.css";
import signature from "../../components/assets/signature.png";
import MainCta from "../GeneralElements/Sharedcomponents/MainCta";

function Lastsection() {
  let promiseData = [
    {
      Promise: `We believe in a balanced way to lose weight and keep the weight off.
            We know that most of the diets or weight loss programs that you have
            tried in the past don’t work - they are just too hard to follow.
            Enormous food cravings, friends that visit you with a bottle of wine,
            that freshly baked cheesecake... Everything affects your journey and
            if your diet is not easy-to-follow, you are not going to achieve your
            results.`,
    },
    {
      Promise: ` Don’t blame yourself. It’s really hard. That’s why our nutritionists
        and personal coaches work around the clock to prepare the most
        effective plans you love. We want to make sure that it becomes a part
        of your life. We don’t change habits, we help you to improve them.`,
    },
    {
      Promise: `Try it out and we guarantee you will be satisfied.`,
    },
  ];
  return (
    <div>
      <div className={style.block_container}>
        <h2>Our promise</h2>
        <div>
          {promiseData.map((el) => (
            <div key={el.Promise}>
              <p>{el.Promise}</p>
            </div>
          ))}
        </div>
        <div className={style.flex_container}>
          <div className={style.flex_item}>
            <p>
              Head of Nutrition
              <br />
              Christine Ellis
            </p>
          </div>
          <div className={style.flex_item}>
            <img src={signature} alt="" />
          </div>
        </div>
        <div className={style.section_break}>
          <MainCta className={style.main_cta_additional} />
        </div>
      </div>
    </div>
  );
}

export default Lastsection;
