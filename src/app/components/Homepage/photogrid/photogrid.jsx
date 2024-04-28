import style from "./photogrid.module.css";

import pic8 from "../../../assets/afro pictures/overlay and images (1).jpg";


export default function Photogrid() {
  return (
    <>
      <div className={style.photo_grid}>
        <div id={style.photoarea}>
         
            <img src={pic8}></img>
          
          
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
