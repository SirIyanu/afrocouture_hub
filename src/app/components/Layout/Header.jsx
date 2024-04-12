// Header.js
import React from 'react';
import magnifying from '../Assets/magnifying-glass-solid.svg'
import message from '../Assets/message-regular.svg'
import bell from '../Assets/bell-regular.svg'
import user from '../Assets/user-solid.svg'




function Header() {
  return (
    <header>
      <button className='search'><img src={magnifying} className='magnifying' alt="" />Search</button>
      <nav>
        <ul className='User'>
          <li><a href="#"><img src={message} className='message' alt="" /></a></li>
          <li><a href="#"><img src={bell} className='bell' alt="" /></a></li>
          <li><a href="#">Joy James</a></li>
          <li><a href="#"><img src={user} className='user' alt="" /></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
