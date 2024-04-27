// Sidebar.js
import React from "react";
// import user from '../Assets/user-solid.svg'

function Sidebar() {
  return (
    <aside className= {style.sidebar}>
      <h2>
        <p className= {style.Afro}>AfroCouture</p>
        <p className= {style.hub}>-Hub</p>
      </h2>
        <ul className= {style.overview}>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Analysis</a>
          </li>
          <li>
            <a href="#">Order</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Customers</a>
          </li>
        </ul>

        <ul className= {style.buyer}>
          <li>
            <a href="#">Buyer's View</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <p className= {style.logout}>Log Out</p>
          {/* <li className="logout">
            <a href="#">Log Out</a>
          </li> */}
        </ul>
    </aside>
  );
}

export default Sidebar;
