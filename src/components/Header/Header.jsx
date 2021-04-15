import React from "react";
import style from "../Header/Header.module.css";
import logo from "../assets/brand_logo.svg";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.flex_container}>
        <div className={style.flex_item_1}>
          <img src={logo} alt="" />
        </div>
        <div className={style.flex_item_2}>
          <button className={style.main__cta}>Start now</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
