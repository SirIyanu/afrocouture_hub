// Header.js
import React from 'react';
// import magnifying from '../Assets/magnifying-glass-solid.svg'
// import message from '../Assets/message-regular.svg'
// import bell from '../Assets/bell-regular.svg'
// import user from '../Assets/user-solid.svg'




function sellerpage() {
  return (
    <header>
      <button className= {style.search}><img src={magnifying} className= {style.magnifying} alt="" />Search</button>
      <nav>
        <ul className= {style.User}>
          <li><a href="#"><img src={message} className= {style.message} alt="" /></a></li>
          <li><a href="#"><img src={bell} className= {style.bell} alt="" /></a></li>
          <li><a href="#">Joy James</a></li>
          <li><a href="#"><img src={user} className= {style.user} alt="" /></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default sellerpage;
