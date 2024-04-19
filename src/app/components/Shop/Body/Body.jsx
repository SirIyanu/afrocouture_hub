import React from "react";
import lens from "../../Assets/lens.png";
import kim from "../../Assets/kim.png";
import star from "../../Assets/star.png";
import james from "../../Assets/james.png";
import pantsuit from "../../Assets/pantsuit.png";
import style from "./body.module.css"; // Import CSS module

export const Body = () => {
  return (
    <div className={style.body}>
      <div className={style.bodytop}>
        <div className={style.anything}>
          <button className={style.anythingbtn}>
            <p>Search for anything...</p>
            <img src={lens} className={style.lens} alt="" />
          </button>
          <div className={style.sortcontainer}>
            <p>Sort by:</p>
            <button className={style.popular}>
              <p>Most Popular</p>
              <img src={lens} className={style.lens} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className={style.active}>
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
          <div className={style.sale}>
            <div className={style.sale1}>
              <img src={kim} className={style.kim} alt="" />
              <div>
                <img src={star} className={style.star} alt="" />
              </div>
              <h4>ETH 0.00028/$15.00</h4>
              <p>Two piece by Miss Jenny Fashion</p>
              <button>Buy Now</button>
            </div>
            <div className={style.sale1}>
              <img src={james} className={style.james} alt="" />
              <div>
                <img src={star} className={style.star} alt="" />
              </div>
              <h4>ETH 0.00028/$15.00</h4>
              <p>Two piece by Miss Jenny Fashion</p>
              <button>Buy Now</button>
            </div>
            <div className={style.sale1}>
              <img src={pantsuit} className={style.kim} alt="" />
              <div>
                <img src={star} className={style.star} alt="" />
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


