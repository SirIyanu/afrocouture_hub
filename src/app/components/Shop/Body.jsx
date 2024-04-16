import React from "react";
import lens from "../Assets/lens.png";
import kim from "../Assets/kim.png";
import star from "../Assets/star.png";
import james from "../Assets/james.png";
import pantsuit from "../Assets/pantsuit.png";

export const Body = () => {
  return (
    <div className="body">
      <div className="bodytop">
        <div className="anything">
          <button className="anythingbtn">
            <p>Search for anything...</p>
            <img src={lens} className="lens" alt="" />
          </button>
          <div className="sort-container">
            <p>Sort by:</p>
            <button className="popular">
              <p>Most Popular</p>
              <img src={lens} className="lens" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="active">
          <ul>
            <li>Active Filters:</li>
            <li>Two -piece X</li>
            <li>$25 to $100 X</li>
            <li>M X</li>
          </ul>
          <span>Showing 1-24 of 3186 results </span>
        </div>
      </div>
      <div>
        <div>
          <div className="sale">
            <div className="sale1">
              <img src={kim} className="kim" alt="" />
              <div>
                <img src={star} className="star" alt="" />
              </div>
              <h4>ETH 0.00028/$15.00</h4>
              <p>Two piece by Miss Jenny Fashion</p>
              <button>Buy Now</button>
            </div>
            <div className="sale1">
              <img src={james} className="james" alt="" />
              <div>
                <img src={star} className="star" alt="" />
              </div>
              <h4>ETH 0.00028/$15.00</h4>
              <p>Two piece by Miss Jenny Fashion</p>
              <button>Buy Now</button>
            </div>
            <div className="sale1">
              <img src={pantsuit} className="kim" alt="" />
              <div>
                <img src={star} className="star" alt="" />
              </div>
              <h4>ETH 0.00028/$15.00</h4>
              <p>Two piece by Miss Jenny Fashion</p>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
