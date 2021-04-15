import React from "react";
import style from "../ProfileSummary/ProfileSummary.module.css";

function ProfileSummary() {
  return (
    <div className={style.profile__summary}>
      <div className={style.flex_container}>
        <div className={style.flex_item}>
          <h2 className={style.sub_headline}>Your profile summary</h2>
        </div>
        <div className={style.flex_container_2}>
          <div className={style.flex_item_right}>
            <h2 className={style.sub_headline}>
              25<span className={style.additional_info}>years old</span>
            </h2>
          </div>
          <div className={style.flex_item_right}>
            <h2 className={style.sub_headline}>
              169<span className={style.additional_info}>cm</span>
            </h2>
          </div>
          <div className={style.flex_item_right}>
            <h2 className={style.sub_headline}>
              64<span className={style.additional_info}>kg</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileSummary;
