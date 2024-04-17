import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import style from './footer.module.css'; // Import your existing CSS module
import Vector from '../images/vector.svg';
import Twiter from '../images/twiter.svg';
import Instagram from '../images/instagram.svg';
import Github from '../images/github.svg';
import Cat from '../images/cat.svg';
import Line from '../images/copyright.svg';

function FooterBar() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>FooterBar</title>
        {/* Add any other metadata you need */}
      </Helmet>
      <div className={style.footerContainer}>
        <div className="row">
          <div className="six columns">
            <h2 className={style.hub}><span>AfroCouture-</span>Hub</h2>
            <h4 className={style.text}>Bringing Africa fashion at your <br /> fingertips</h4>
            <ul className={style.images}>
              <li><img src={Instagram} alt="Instagram" /></li>
              <li><img src={Github} alt="Github" /></li>
              <li><img src={Vector} alt="Vector" /></li>
              <li><img src={Twiter} alt="Twiter" /></li>
              <li><img src={Cat} alt="Cat" /></li>
            </ul>
          </div>
          <div className="two columns">
            <h2 className={style.h2}>Company</h2>
            <ul className={style.ul}>
              <li>About</li>
              <li>Contact us</li>
              <li>Support</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="two columns">
            <h2 className={style.h2}>Quick Link</h2>
            <ul className={style.ul}>
              <li>Share Location</li>
              <li>Orders Tracking</li>
              <li>Site Map</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="two columns">
            <h2 className={style.h2}>Our Information</h2>
            <ul className={style.ul}>
              <li>Terms & condition</li>
              <li>Private Policy</li>
              <li>Return Policy</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <li><img src={Line} alt="Line" /></li>
        </div>
      </div>
    </>
  );
}

export default FooterBar;
