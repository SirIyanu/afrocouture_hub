import style from "./photogrid.module.css";
import Pica from "../../../assets/afro pictures/TOP PICKS FOR YOU 1.jpg";
import Picb from "../../../assets/afro pictures/TOP PICKS FOR YOU 2.jpg";
import Picc from "../../../assets/afro pictures/TOP PICKS FOR YOU 3.jpg";
import Picd from "../../../assets/afro pictures/TOP PICKS FOR YOU 4.jpg";
import Pice from "../../../assets/afro pictures/TOP PICKS FOR YOU 5.jpg";
import Pic_1 from "../../../assets/afro pictures/luxury girl 1.jpg";
import Pic2 from "../../../assets/afro pictures/Luxury girl 2.jpg";
import Pic3 from "../../../assets/afro pictures/luxury girl 3.jpg";
import Pic4 from "../../../assets/afro pictures/luxury girl 4.jpg";
import Picf from "../../../assets/afro pictures/hero section 1.jpg";
import pic5 from "../../../assets/afro pictures/hero section 1.jpg";
import pic6 from "../../../assets/afro pictures/Hero section 2.jpg";
import pic7 from "../../../assets/afro pictures/TOP PICKS FOR YOU 4.jpg";
import pic8 from "../../../assets/afro pictures/miss jenny fashion 2.jpg";

export default function Photogrid() {
  return (
    <>
      <div className={style.photo_grid}>
        <div id="photoarea">
          <div>
            <img src={Pic_1}></img>
            <img src={Picc}></img>
            <img src={Picd}></img>
            <img src={Pice}></img>
            <img src={Picb}></img>
            <img src={Pic3}></img>
            <img src={Picf}></img>
          </div>
          <div>
            <img src={Pic2}></img>
            <img src={Pic3}></img>
            <img src={Pic4}></img>
            <img src={pic5}></img>
            <img src={pic6}></img>
            <img src={pic7}></img>
            <img src={pic8}></img>
          </div>
        </div>
        <div id={style.rightgrid}>
          <label>Limited Offer</label>
          <h3>Get 25% Off from your favorite Brands today</h3>
          <a>Get it now</a>
        </div>
      </div>
    </>
  );
}
