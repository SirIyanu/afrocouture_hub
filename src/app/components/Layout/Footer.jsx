// Footer.js
import React from 'react';
import instagram from '../Assets/instagram.svg'
import github from '../Assets/github.svg'
import facebook from '../Assets/facebook.svg'
import twitter from '../Assets/twitter.svg'


function Footer() {
  return (
    <footer className='footer'>
        <h6>Beauty is in the eye of the beholder, but we can bring it to you!</h6>
      <p>afrocouture-hub.com/seller</p>
      <ul className='User'>
          <li><a href="#"><img src={instagram} className='instagram' alt="" /></a></li>
          <li><a href="#"><img src={github} className='github' alt="" /></a></li>
          <li><a href="#"><img src={facebook} className='facebook' alt="" /></a></li>
          <li><a href="#"><img src={twitter} className='twitter' alt="" /></a></li>
        </ul>
      <p>_______________________Copyright @ 2022 All rights are reserved_______________________</p>
    </footer>
  );
}

export default Footer;
