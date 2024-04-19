// Head.jsx

import React from "react";
import logo from "../../Assets/logo.svg"
import lens from "../../Assets/lens.png"
import user from "../../Assets/user.png";
import favorite from "../../Assets/favorite.png";
import cart from "../../Assets/cart.png";
import style from "./head.module.css"; // Import CSS module

export const Head = () => {
  return (
    <header className={style.headsection}>
      <img src={logo} className={style.logo} alt="" />
      <button className={style.searchbutton}>
        <img src={lens} className={style.lens} alt="" />
        <span>Type to search</span>
      </button>
      <ul className={style.navlist}>
        <li><img src={user} className={style.user} alt="" /></li>
        <li><img src={favorite} className={style.favorite} alt="" /></li>
        <li><img src={cart} className={style.cart} alt="" /></li>
        <li className={style.bestseller}>
          <a href="">Become a best seller</a>
        </li>
      </ul>
    </header>
  );
}
