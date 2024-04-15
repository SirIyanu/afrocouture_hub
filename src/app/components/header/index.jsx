import { Logo } from "../Logo";
import style from "./style.module.css";
export const HeaderNavigation = () => {
  return (
    <div className={style.wrapper}>
      <Logo />
    </div>
  );
};
