import { Link } from "react-router-dom";
import style from "./secondsection.module.css";

export default function SecondSection() {
  return (
    <div className={style.secondsection}>
      <a>Home</a>
      <Link style={{ color: "white" }} to="/shop">
        Shops
      </Link>
      <a>Brands</a>
      <a>About Us</a>
      <a>Contact Us</a>
    </div>
  );
}
