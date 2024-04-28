import style from "./secondlineofpics.module.css";
import Pica from "../../../assets/afro pictures/TOP PICKS FOR YOU 1.jpg";
import Picb from "../../../assets/afro pictures/TOP PICKS FOR YOU 2.jpg";
import Picc from "../../../assets/afro pictures/TOP PICKS FOR YOU 3.jpg";
import Picd from "../../../assets/afro pictures/TOP PICKS FOR YOU 4.jpg";
import Pice from "../../../assets/afro pictures/TOP PICKS FOR YOU 5.jpg";
import Picf from "../../../assets/afro pictures/TOP PICKS FOR YOU 6.jpg";
import FloatingButtons from "../floatingbuttons/FloatingButtons";

export default function SecondLineOfPics() {
  return (
    <>
    <div className={style.secondlineofpics}>
      <p>Top Picks for you!</p>
      <div className={style.lineofphotos}>
        <img src={Pica}></img>
        <img src={Picb}></img>
        <img src={Picc}></img>
        <img src={Picd}></img>
        <img src={Pice}></img>
        <img src={Picf}></img>
      </div>
    </div>
    <FloatingButtons first="Shop Women" second="Best Seller" third="Shop Women" fourth="Shop Shoes" fifth="Shop Women" sixth="Shop Men"/>
    </> 
    
    

  );
}
