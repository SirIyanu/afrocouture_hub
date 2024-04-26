import React from "react";
import chevron from "../../../Assets/chevron.png";
import style from "./hero.module.css";

export const Hero = () => {
  return (
    <div className={style.hero}> 
      <ul className={style.home}>
        <li>Home</li>
        <li>Shop</li>
        <li>Brands</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
      <div className={style.shop}> 
        <p>Home</p>
        <img src={chevron} className={style.chevron} alt="" /> 
        <p className={style.ptag}>Shop</p>
      </div>
    </div>
  );
};


