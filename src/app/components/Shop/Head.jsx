import React from 'react';
import logo from '../Assets/logo.svg'


function Head() {
    return (
      <header className='headsection'>
      <img src={logo} className='logo' alt="" />
      <button>Type to search</button>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li><a href="">Become a best seller</a></li>
      </ul>
      </header>
      
    );
  }
  
  export default Head;