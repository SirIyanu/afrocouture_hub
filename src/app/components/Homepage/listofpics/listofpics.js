import Pic1 from "../afro pictures/luxury girl 1.jpg";
import Pic2 from "../afro pictures/Luxury girl 2.jpg";
import Pic3 from "../afro pictures/luxury girl 3.jpg";
import Pic4 from "../afro pictures/luxury girl 4.jpg";
import InlineOfPics from "../inlineofpics/inlineofpics";
import LineOfOption from "../lineofoptions/lineofoptions";
import "./listofpics.css";
export default function ListOfPics() {
  return (
    <div className="displaypics">
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
        picA={Pic1}
        des1="Kimono african print"
        p1="ETH 0.00028/$15.00"
        b1="Buy Now"
        left="MISS JENNY FASHION"
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
    </div>
  );
}
