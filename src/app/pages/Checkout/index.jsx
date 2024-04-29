import { Footer } from "../../components/Footer";
import { Head } from "../../components/Shop/Head/Head";
import { Hero } from "../../components/Shop/Hero/Hero";
import style from "./style.module.css";
import SmallKim from "../../assets/icons/small-kim.svg";
import Edit from "../../assets/icons/edit.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import { CustomButton } from "../../components/Button";
import { useNavigate } from "react-router-dom";
export const Checkout = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
    console.log("i am working");
  };

  return (
    <div>
      <Head />
      <Hero />
      <div className={style.body}>
        <div className={style.wrapper}>
          <div className={style["container-one"]}>
            <div className={style.small}>
              <h2>Cart Details</h2>
            </div>
            <div className={style.big}>
              <div className={style.content}>
                <div className={style.photo}>
                  <img src={SmallKim} alt="" />
                </div>
                <div className={style.folder}>
                  <div className={style.text}>
                    <div className={style["section-one"]}>
                      <p>Sabi Collections</p>
                      <p>2 Piece Outfit</p>
                      <p>Tube top, long leg trousers and kimono jacket</p>
                      <p>Size: Uk 12</p>
                      <p>
                        <strong>Eth 0.058/$210.33</strong>
                      </p>
                    </div>
                  </div>
                  <div className={style.wrapup}>
                    <div>
                      <select name="" id=""></select>
                    </div>
                    <div className={style.edit}>
                      <img src={Edit} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.content}>
                <div className={style.photo}>
                  <img src={SmallKim} alt="" />
                </div>
                <div className={style.folder}>
                  <div className={style.text}>
                    <div className={style["section-one"]}>
                      <p>Sabi Collections</p>
                      <p>2 Piece Outfit</p>
                      <p>Tube top, long leg trousers and kimono jacket</p>
                      <p>Size: Uk 12</p>
                      <p>
                        <strong>Eth 0.058/$210.33</strong>
                      </p>
                    </div>
                  </div>
                  <div className={style.wrapup}>
                    <div>
                      <select name="" id=""></select>
                    </div>
                    <div className={style.edit}>
                      <img src={Edit} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.content}>
                <div className={style.photo}>
                  <img src={SmallKim} alt="" />
                </div>
                <div className={style.folder}>
                  <div className={style.text}>
                    <div className={style["section-one"]}>
                      <p>Sabi Collections</p>
                      <p>2 Piece Outfit</p>
                      <p>Tube top, long leg trousers and kimono jacket</p>
                      <p>Size: Uk 12</p>
                      <p>
                        <strong>Eth 0.058/$210.33</strong>
                      </p>
                    </div>
                  </div>
                  <div className={style.wrapup}>
                    <div>
                      <select name="" id=""></select>
                    </div>
                    <div className={style.edit}>
                      <img src={Edit} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.content}>
                <div className={style.photo}>
                  <img src={SmallKim} alt="" />
                </div>
                <div className={style.folder}>
                  <div className={style.text}>
                    <div className={style["section-one"]}>
                      <p>Sabi Collections</p>
                      <p>2 Piece Outfit</p>
                      <p>Tube top, long leg trousers and kimono jacket</p>
                      <p>Size: Uk 12</p>
                      <p>
                        <strong>Eth 0.058/$210.33</strong>
                      </p>
                    </div>
                  </div>
                  <div className={style.wrapup}>
                    <div>
                      <select name="" id=""></select>
                    </div>
                    <div className={style.edit}>
                      <img src={Edit} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.content}>
                <div className={style.photo}>
                  <img src={SmallKim} alt="" />
                </div>
                <div className={style.folder}>
                  <div className={style.text}>
                    <div className={style["section-one"]}>
                      <p>Sabi Collections</p>
                      <p>2 Piece Outfit</p>
                      <p>Tube top, long leg trousers and kimono jacket</p>
                      <p>Size: Uk 12</p>
                      <p>
                        <strong>Eth 0.058/$210.33</strong>
                      </p>
                    </div>
                  </div>
                  <div className={style.wrapup}>
                    <div>
                      <select name="" id=""></select>
                    </div>
                    <div className={style.edit}>
                      <img src={Edit} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.wrapperry}>
          <div className={style.smaller}>
            <h2>Summary</h2>
          </div>
          <div className={style["container-two"]}>
            <div className={style.pack}>
              <div className={style.flexy}>
                <p>Sub-Total</p>
                <p>$1760</p>
              </div>
              <div className={style.flexy}>
                <p>Shipping </p>
                <p>$12</p>
              </div>
              <div className={style.flexy}>
                <p>Discount</p>
                <p>$12</p>
              </div>
              <div className={style.flexy}>
                <p>Tax</p>
                <p> $1.05</p>
              </div>
              <div className={style.divider}></div>
              <div className={style.flexy}>
                <p>Total</p>
                <p>$1761.05</p>
              </div>
              <br />
              <br />
            </div>
            <CustomButton onClick={handleButtonClick}>
              Proceed to checkout &nbsp;{" "}
              <img style={{ color: "" }} src={ArrowRight} alt="" />
            </CustomButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
