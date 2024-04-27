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
      <ul className={style.navlist}>
        <li>
          <img src={User} className={style.user} alt="" />
        </li>
        <li>
          <img src={favorite} className={style.favorite} alt="" />
        </li>
        <li>
          <img src={cart} className={style.cart} alt="" />
        </li>
        <li className={style.bestseller}>
          <a href="bestseller">Become a best seller</a>
        </li>
      </ul>
    </header>
  );
};
