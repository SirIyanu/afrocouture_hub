import { Link } from "react-router-dom";
import RaphaelCart from "../../assets/icons/raphael-cart.svg";
import style from "./style.module.css";

export const Logo = () => {
  const myIcon = RaphaelCart;
  return (
    <Link to="/" className={style.logo}>
      <div style={{ color: "#ff8a00" }}>AfroCouture-</div>
      <div style={{ color: "#ffff" }}>
        H
        <img src={myIcon} alt="logo" />b
      </div>
    </Link>
  );
};
