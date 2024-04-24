import { Footer } from "../../components/Footer";
import style from "./style.module.css";
import { HeaderNavigation } from "../../components/header";
import NavigationPage from "../../components/login/Header/homePage";

export const VerificationPage = () => {
  return (
    <div className={style.flex}>
      <HeaderNavigation />
      <NavigationPage />
      <Footer />
    </div>
  );
};
