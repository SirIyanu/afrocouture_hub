import style from "./heading.module.css";
import search from "../../../assets/afro pictures/search.jpg";
import profile from "../../../assets/afro pictures/profile.jpg";
import { Link } from "react-router-dom";

export default function Heading() {
  return (
    <div className={style.head}>
      <div id={style.logo}>
        <h1>
          Afrocouture-<span>HUb</span>
        </h1>
      </div>

      <div id={style.searchbutton}>
        <img src={search}></img>
        <input type="text" placeholder="Type to search" />
      </div>

      <div id={style.lastsectionheading}>
        <Link to="/shop">
        <img src={profile}></img>
        </Link>
        
        <img src={profile}></img>
        <img src={profile}></img>
        <Link to="/signUp"> Become a seller</Link>
      </div>
    </div>
  );
}
