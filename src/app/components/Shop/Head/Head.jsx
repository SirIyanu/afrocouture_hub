// Head.jsx

import React from "react";
import logo from "../../../assets/photos/logo.svg";
import lens from "../../../assets/photos/lens.png";
// import user from "../../../assets/photos/user.png";
import favorite from "../../../assets/photos/favorite.png";
import cart from "../../../assets/photos/cart.png";
import User from "../../../assets/photos/user.svg";
import style from "./head.module.css";

export const Head = () => {
  return (
    <header className={style.headsection}>
      <img src={logo} className={style.logo} alt="" />
      <button className={style.searchbutton}>
        <img src={lens} className={style.lens} alt="" />
        <span>Type to search</span>
      </button>
      <div className={style.navlist}>
        <div>
          <img src={User} className={style.user} alt="" />
        </div>
        <div>
          <img src={favorite} className={style.favorite} alt="" />
        </div>
        <div>
          <img src={cart} className={style.cart} alt="" />
        </div>
        <div className={style.bestseller}>
          <a href="bestseller">Become a best seller</a>
        </div>
      </div>
    </header>
  );
};
