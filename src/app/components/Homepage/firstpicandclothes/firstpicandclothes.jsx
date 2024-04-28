import style from "./firstpicandclothes.module.css";
import Pic1 from "../../../assets/afro pictures/hero_section_1-removebg-preview.png";
import Pic2 from "../../../assets/afro pictures/Hero_section_2-removebg-preview.png";
export default function FirstPicAndClothes() {
  return (
    <div className={style.firstpicclothes}>
      <div id={style.firstpicclothesone}>
        <p>
          Discover the vibrant <br /> essence of Africa's <br />
          Fashion with Afrocentric's <br />
          <span>Two-piece collection</span>
        </p>
        <h6>
          Explore unique styles from the best of the <br/>best African brands
        </h6>
        <button>Shop now</button>
      </div>

      <div id={style.firstpicclothestwo}>
        <img src={Pic1}></img>
      </div>

      <div id={style.firstpicclothesthree}>
        <img src={Pic2}></img>
      </div>
    </div>
  );
}
