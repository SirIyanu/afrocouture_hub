import React from "react";
import logo from "../Assets/logo.svg";
import lens from "../Assets/lens.png";
import user from "../Assets/user.png";
import favorite from "../Assets/favorite.png";
import cart from "../Assets/cart.png";


function Head() {
  return (
    <header className="headsection">
      <img src={logo} className="logo" alt="" />
      <button className="searchbutton">
        <img src={lens} className="lens" alt="" />
        <span>Type to search</span>
      </button>
      <ul className="navlist">
        <li><img src={user} className="user" alt="" /></li>
        <li><img src={favorite} className="favorite" alt="" /></li>
        <li><img src={cart} className="cart" alt="" /></li>
        <li className="bestseller">
          <a href="">Become a best seller</a>
        </li>
      </ul>
    </header>
  );
}

export default Head;
