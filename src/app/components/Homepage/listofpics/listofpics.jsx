import Pic1 from "../../../assets/afro pictures/luxury girl 1.jpg";
import Pic2 from "../../../assets/afro pictures/Luxury girl 2.jpg";
import Pic3 from "../../../assets/afro pictures/luxury girl 3.jpg";
import Pic4 from "../../../assets/afro pictures/luxury girl 4.jpg";
import Pic5 from "../../../assets/afro pictures/miss jenny fashion 1.jpg";
import Pic6 from "../../../assets/afro pictures/miss jenny fashion 2 (1).jpg";
import Pic7 from "../../../assets/afro pictures/miss jenny fashion 3.jpg";
import Pic8 from "../../../assets/afro pictures/miss jenny fashion 0.png";
import InlineOfPics from "../inlineofpics/inlineofpics";
import LineOfOption from "../lineofoptions/lineofoptions";
import style from "./listofpics.module.css";

export default function ListOfPics() {
  return (
    <div className={style.displaypics}>
      <LineOfOption />
      <InlineOfPics
        picA={Pic1}
        des1="Kimono african print"
        p1="ETH 0.00028/$15.00"
        b1="Buy Now"
        left="LUXURY GIRL"
        right="View all"
        picB={Pic2}
        des2="Jumpsuit-shorts"
        p2="ETH 0.00028/$15.00"
        b2="Buy Now"
        picC={Pic3}
        des3="Two-piece zaha collections"
        p3="ETH 0.00028/$15.00"
        b3="Buy Now"
        picD={Pic4}
        des4="Blazer and pants"
        p4="ETH 0.00028/$15.00"
        b4="Buy Now"
      />

      <InlineOfPics
        picA={Pic5}
        des1="Kimono african print"
        p1="ETH 0.00028/$15.00"
        b1="Buy Now"
        left="MISS JENNY FASHION"
        right="View all"
        picB={Pic6}
        des2="Jumpsuit-shorts"
        p2="ETH 0.00028/$15.00"
        b2="Buy Now"
        picC={Pic7}
        des3="Two-piece zaha collections"
        p3="ETH 0.00028/$15.00"
        b3="Buy Now"
        picD={Pic8}
        des4="Blazer and pants"
        p4="ETH 0.00028/$15.00"
        b4="Buy Now"
      />
    </div>
  );
}
