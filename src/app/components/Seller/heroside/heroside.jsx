// Hero.js
import React from 'react';
// import plus from '../Assets/plus-solid.svg'

function Hero() {
  return (
    <section className="hero">
      <h2>Collections</h2>
      <button className='Addproductbutton'><img src={plus} className='plus' alt="" />Add Product</button>
    </section>
  );
}

export default Hero;
