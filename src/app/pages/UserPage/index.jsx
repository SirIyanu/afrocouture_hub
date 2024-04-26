import { Head } from "../../components/Shop/Head/Head";
import { Hero } from "../../components/Shop/Hero/Hero";
import { Footer } from "../../components/Footer";
import style from "./style.module.css";
import Kim from "../../assets/icons/kim.svg";
import Bigkim from "../../assets/icons/Big-kim.svg";
import Star from "../../assets/icons/Star.svg";

export const UserPage = () => {
  return (
    <div className={style.flex}>
      <Head />
      <Hero />
      <div className={style.body}>
        <main className={style["small-container-one"]}>
          <div className={style["section-one"]}>
            <div className={style["small-kim"]}>
              <div className={style["kim-container"]}>
                <img src={Kim} alt="" />
              </div>
              <div className={style["kim-container"]}>
                <img src={Kim} alt="" />
              </div>
              <div className={style["kim-container"]}>
                <img src={Kim} alt="" />
              </div>
            </div>
            <div className={style["Big-kim"]}>
              <img src={Bigkim} alt="" />
            </div>
          </div>
          <div className={style["section-two"]}>
            <h1>Two-piece sabi collections</h1>
            <div className={style["star-text"]}>
              <div>
                <img src={Star} alt="" />
              </div>
              <div>
                <p className={style["small-text"]}>
                  4.7 (738 verified ratings)
                </p>
              </div>
            </div>
          </div>
        </main>
        <main className={style["small-containers"]}>
          <p>lorem</p>
        </main>
        <main className={style["small-containers"]}>
          <p>lorem</p>
        </main>
      </div>
      <Footer />
    </div>
  );
};
