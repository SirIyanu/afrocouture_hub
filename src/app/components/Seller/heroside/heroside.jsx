// Hero.js
import React from 'react';
// import plus from '../Assets/plus-solid.svg'

function Hero() {
  return (
    <section className= {style.hero}>
      <h2>Collections</h2>
      <button className= {style.Addproductbutton}><img src={plus} className= {style.plus}alt="" />Add Product</button>
    </section>
  );
}

export default Hero;
