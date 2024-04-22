import React from "react";
import lens from "../../Assets/lens.png";
import kim from "../../Assets/kim.png";
import star from "../../Assets/star.png";
import james from "../../Assets/james.png";
import pantsuit from "../../Assets/pantsuit.png";
import okunrin from "../../Assets/okunrin.png";
import maxi from "../../Assets/maxi.png";
import ssjames from "../../Assets/ssjames.png";
import page from "../../Assets/page.png";
import style from "./body.module.css";

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
      <div className={style.salecontainer}>
        <div>
          <img src={kim} className={style.sale} alt="" />
          <div>
            <img src={star} className={style.star} alt="" />
          </div>
          <p>Two piece by Miss Jenny Fashion</p>
          <h4 className={style.eth}>ETH 0.00028/$15.00</h4>
          <button className={style.buynow}>Buy Now</button>
        </div>
        <div>
          <img src={okunrin} className={style.sale} alt="" />
          <div>
            <img src={star} className={style.star} alt="" />
          </div>
          <p>Two piece by Miss Jenny Fashion</p>
          <h4 className={style.eth}> ETH 0.00028/$15.00</h4>
          <button className={style.buynow}>Buy Now</button>
        </div>
        <div>
          <img src={pantsuit} className={style.sale} alt="" />
          <div>
            <img src={star} className={style.star} alt="" />
          </div>
          <p>Two piece by Miss Jenny Fashion</p>
          <h4 className={style.eth}>ETH 0.00028/$15.00</h4>
          <button className={style.buynow}>Buy Now</button>
        </div>
        <div>
          <img src={maxi} className={style.sale} alt="" />
          <div>
            <img src={star} className={style.star} alt="" />
          </div>
          <p>Two piece by Miss Jenny Fashion</p>
          <h4 className={style.eth}>ETH 0.00028/$15.00</h4>
          <button className={style.buynow}>Buy Now</button>
        </div>
        <div>
          <img src={james} className={style.sale} alt="" />
          <div>
            <img src={star} className={style.star} alt="" />
          </div>
          <p>Two piece by Miss Jenny Fashion</p>
          <h4 className={style.eth}>ETH 0.00028/$15.00</h4>
          <button className={style.buynow}>Buy Now</button>
        </div>
        <div>
          <img src={ssjames} className={style.sale} alt="" />
          <div>
            <img src={star} className={style.star} alt="" />
          </div>
          <p>Two piece by Miss Jenny Fashion</p>
          <h4 className={style.eth}>ETH 0.00028/$15.00</h4>
          <button className={style.buynow}>Buy Now</button>
        </div>
      </div>
      <div className={style.page}>
        <img src={page} className="" alt="" />
      </div>
    </div>
  );
};
