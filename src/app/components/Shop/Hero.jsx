import React from "react";
import chevron from "../Assets/chevron.png";

export const Hero = () => {
  return (
    <div className="hero">
      <ul className="home">
        <li>Home</li>
        <li>Shop</li>
        <li>Brands</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
      <div className="shop">
        <p>Home</p>
        <img src={chevron} className="chevron" alt="" />
        <p className="ptag">Shop</p>
      </div>
    </div>
  );
};
export default Hero;
