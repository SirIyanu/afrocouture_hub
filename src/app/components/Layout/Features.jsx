// Features.js
import React from 'react';
import heel from '../Assets/heel.jpeg'
import kimono from '../Assets/kimono.jpeg'
import maxi from '../Assets/maxi.jpeg'
import short from '../Assets/short.jpeg'
import slide from '../Assets/slide.jpeg'
import turban from '../Assets/turban.jpeg'
import wrap from '../Assets/wrap.jpeg'
import zuri from '../Assets/zuri.jpeg'

function Features() {
  return (
    <section className="features">
      <div className="feature-list">
        <div>
            <div className="feature">
            <li><a href="#"><img src={heel} className='heel' alt="" /></a></li>
              <p>African print set</p>
            </div>
            <div className="feature">
            <li><a href="#"><img src={kimono} className='kimono' alt="" /></a></li>
              <p>Kimono & Pant</p>
            </div>
            <div className="feature">
            <li><a href="#"><img src={maxi} className='maxi' alt="" /></a></li>
              <p>Crop Top & Maxi-Skirt</p>
            </div>
        </div>

        <div>
          <div className="feature">
          <li><a href="#"><img src={short} className='short' alt="" /></a></li>
            <p>Kimono & Short</p>
          </div>
          <div className="feature">
          <li><a href="#"><img src={slide} className='slide' alt="" /></a></li>
            <p>Slide</p>
          </div>
          <div className="feature">
          <li><a href="#"><img src={turban} className='turban' alt="" /></a></li>
            <p>Turban</p>
          </div>
        </div>
        
          <div>
            <div className="feature">
            <li><a href="#"><img src={wrap} className='wrap' alt="" /></a></li>
              <p>Head Wrap</p>
            </div>
          
            <div className="feature">
            <li><a href="#"><img src={zuri} className='zuri' alt="" /></a></li>
              <p>Maxi Gown with Slit</p>
            </div>
            <div className="feature">
            <li><a href="#"><img src={zuri} className='zuri' alt="" /></a></li>
              <p>Maxi Gown with Slit</p>
            </div>
          </div>
          
          <div>
            <div className="feature">
            <li><a href="#"><img src={wrap} className='wrap' alt="" /></a></li>
              <p>Head Wrap</p>
            </div>
          
            <div className="feature">
            <li><a href="#"><img src={zuri} className='zuri' alt="" /></a></li>
              <p>Maxi Gown with Slit</p>
            </div>
            <div className="feature">
            <li><a href="#"><img src={zuri} className='zuri' alt="" /></a></li>
              <p>Maxi Gown with Slit</p>
            </div>
          </div>
      </div>
      <div className='showing'>
        <p>Showing 12 of 12  Collections</p>
        <p className='number'>1-12 of 12</p>
        <img src="" alt="" />
      </div>
    </section>
  );
}

export default Features;
