import React from "react";
import range from "../../../assets/photos/range.png";
import line from "../../../assets/photos/line.png";
import style from "./side.module.css";

export const Side = () => {
  return (
    <div className={style.side}>
      <div>
        <div className={style.categoryside}>
          <h3 className={style.category}>CATEGORY</h3>
          <ul>
            <li>
              <label>
                <input type="radio" name="category" value="newin" /> New in
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="sale" /> Sale
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="women" /> Women
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="men" /> Men
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="sale" /> Two piece
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="dresses" /> Dresses
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="tops" /> Tops
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="bottomwear" /> Bottom
                wear
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="jumpsuit" /> Jump
                Suit
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="dashiki" /> Dashiki
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="dashiki" /> Bags and
                purses
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="dashiki" /> Footwear
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="dashiki" />{" "}
                Accessories
              </label>
            </li>
            <li>
              <img src={line} className={style.line} alt="" />
            </li>
          </ul>
        </div>

        <div className={style.price}>
          <h3>PRICE RANGE</h3>
          <img src={range} className={style.range} alt="" />
          <div className={style.minmax}>
            <button>
              <p>Min price</p>
            </button>
            <button>Max Price</button>
          </div>

          <ul>
            <li>
              <label>
                <input type="radio" name="category" value="" /> All Price
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> Under $20
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> $25 to $100
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> $100 to $300
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> $300 to $500
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> $500 to $1,000
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> $1,000 to
                $10,000
              </label>
            </li>
            <li>
              <img src={line} className={style.line} alt="" />
            </li>
          </ul>
        </div>
        <div className={style.pbrands}>
          <h3>POPULAR BRANDS</h3>
          <ul>
            <li>
              <label>
                <input type="radio" name="category" value="" /> Miss Jenny
                Fashion
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> MAfrocentric
                store
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> Sima Fashion
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> Okunrin Haven
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> James K.
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> Luxury Girl
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> Luxury Girl
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> Stephen and
                Stephen
              </label>
            </li>
            <li>
              <img src={line} className={style.line} alt="" />
            </li>
          </ul>
        </div>
        <div className={style.mainsize}>
          <h3 className={style.size}>SIZE</h3>
          <ul>
            <li>
              <label>
                <input type="radio" name="category" value="" /> S
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> M
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> L
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> XL
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> XXL
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="category" value="" /> XXXL
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
