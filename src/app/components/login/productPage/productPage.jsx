import React from "react";
import style from "./product.module.css"; // Import CSS file

// Import images
import image42 from "../images/image 42.svg";
import image43 from "../images/image 43.svg";
import image44 from "../images/image 44.svg";
import productImage from "../images/PRODUCT IMAGE.svg";
import paymentMethodContent from "../images/payment method content.svg";
import star from "../images/Star.svg";
import addToCart from "../images/add to cart.svg";
import buyNow from "../images/buy now.svg";
import addToWishlist from "../images/add to wishlist.svg";
import reviews from "../images/reviews.svg";
import jumpsuitShorts from "../images/jumpsuit shorts.svg";
import fittedGown from "../images/fitted gown.svg";
import sunnyJumpsuit from "../images/sunny jumpsuit.svg";
import kimono from "../images/kimono.svg";
import { useNavigate } from "react-router-dom";
import { Checkout } from "../../../pages/Checkout";

const Product = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/checkout");
    console.log("i am working");
  };

  return (
    <>
      <main className={style.main}>
        <div className={style.left}>
          <div>
            <img src={image42} alt="" />
          </div>
          <div>
            <img src={image43} alt="right" />
          </div>
          <div>
            <img src={image44} alt="left" />
          </div>
        </div>
        <div className={style.middle}>
          <img src={productImage} alt="middle" />
          <div>
            <img src={paymentMethodContent} alt="" />
          </div>
        </div>
        <div className={style.right}>
          <div className={style.top}>
            <h3 className={style.piece}>Two-piece sabi collections</h3>
            <div>
              <img src={star} alt="" />
              <span>4.7(738 verified ratings)</span>
            </div>
            <div className={style.piece}>ETH 0.0028 / $15</div>
            <div>Category: Two-piece</div>
            <div>Collection: Sabi Collections</div>
            <div>
              Availability: <span className={style.stock}>In Stock</span>
            </div>
            <div>Sku: #1012</div>
            <div className={style.line}></div>
          </div>
          <div className={style.center}>
            <div>size</div>
            <div>
              <input type="text" placeholder="Please select" />
            </div>
            <div className={style.signs}>
              +<h4 className={style.one}>1</h4>-{" "}
            </div>
            <div>
              <button className={style.button}>
                <img src={addToCart} alt="" />
              </button>
              <button onClick={handleButtonClick} className={style.button}>
                <img src={buyNow} alt="" />
              </button>
              <button onClick={handleButtonClick} className={style.button}>
                <img src={addToWishlist} alt="" />
              </button>
            </div>
            <div>
              <img src={paymentMethodContent} alt="" />
            </div>
          </div>
        </div>
      </main>

      <section className={style.secondPart}>
        <nav>
          <div className={style.discription}>
            <li>DESCRIPTION</li>
            <li>ADDITIONAL INFORMAION</li>
            <li className={style.reviews}>
              REVIEWS <span className={style.round}>738</span>
            </li>
          </div>
          <div className={style.line2}></div>
          <div className={style.showResult}>
            <div>Showing 1-2 of 738 results </div>
            <div className={style.sort}>
              Sort by:
              <input type="text" placeholder="Newest" />
            </div>
          </div>
        </nav>
        <div>
          <img src={reviews} alt="" />
        </div>
      </section>

      <section className={style.thirdPart}>
        <div>
          <h1>YOU MIGHT ALSO LIKE</h1>
        </div>
        <div className={style.designs}>
          <div>
            <div>
              <img src={jumpsuitShorts} alt="" />
            </div>
            <div>
              <img src={star} alt="" />
            </div>
            <div className={style.suit}>
              Jumpsuit-short by <br />
              Luxury girl
            </div>
            <div className={style.eth}>ETH 0.00028/$15.00</div>
            <div>
              <button className={style.button}>
                <img src={addToCart} alt="" />
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src={fittedGown} alt="" />
            </div>
            <div>
              <img src={star} alt="" />
            </div>
            <div className={style.suit}>
              Fitted Gown by <br />
              Miss Jenny Fashion
            </div>
            <div className={style.eth}>ETH 0.00028/$15.00</div>
            <div>
              <button className={style.button}>
                <img src={addToCart} alt="" />
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src={sunnyJumpsuit} alt="" />
            </div>
            <div>
              <img src={star} alt="" />
            </div>
            <div className={style.suit}>
              Pantsuit by <br />
              Afrocentric store
            </div>
            <div className={style.eth}>ETH 0.00028/$15.00</div>
            <div>
              <button className={style.button}>
                <img src={addToCart} alt="" />
              </button>
            </div>
          </div>
          <div>
            <div>
              <img src={kimono} alt="" />
            </div>
            <div>
              <img src={star} alt="" />
            </div>
            <div className={style.suit}>
              kimono african print <br /> by Luxury girl
            </div>
            <div className={style.eth}>ETH 0.00028/$15.00</div>
            <div>
              <button className={style.button}>
                <img src={addToCart} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
