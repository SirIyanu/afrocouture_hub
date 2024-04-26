import { FaInstagram, FaGithub, FaTwitter, FaReddit } from "react-icons/fa";
import style from "./style.module.css";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import { companyMenu, quickLinkMenu, ourInformationMenu } from "./data";
export function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.menu}>
        <br />
        <Logo />
        <p>
          Bringing African fashion at your
          <br /> fingertips
        </p>
        <div className={style.icons}>
          <FaInstagram />
          <FaGithub />
          <FaTwitter />
          <FaReddit />
        </div>
      </div>
      <div className={style.flex}>
        <Menu title="Company" options={companyMenu} />
        <Menu title="Quick Link" options={quickLinkMenu} />
        <Menu title="Our Information" options={ourInformationMenu} />
      </div>
      <div className={style.divider}>
        <span>Copyright @ 2024 All rights are resrved</span>
      </div>
      <br />
    </div>
  );
}

export const Menu = ({ title, options }) => {
  return (
    <nav className={style.nav}>
      <h5>{title || <>&nbsp;</>}</h5>
      <ul>
        {options &&
          options.map((option) => {
            return (
              <li>
                <Link to={option.url}>{option.name}</Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
