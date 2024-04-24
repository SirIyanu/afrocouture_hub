// Sidebar.js
import React from "react";
// import user from '../Assets/user-solid.svg'

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>
        <p className="Afro">AfroCouture</p>
        <p className="hub">-Hub</p>
      </h2>
        <ul className="overview">
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

        <ul className="buyer">
          <li>
            <a href="#">Buyer's View</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <p className="logout">Log Out</p>
          {/* <li className="logout">
            <a href="#">Log Out</a>
          </li> */}
        </ul>
    </aside>
  );
}

export default Sidebar;
