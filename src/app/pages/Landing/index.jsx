import Head from "../../components/Shop/Head";
import Hero from "../../components/Shop/Hero";
import Side from "../../components/Shop/Side";
import Body from "../../components/Shop/Body";
// import style from "./style.module.css";

import "./components/Shop/Shop.css";

export const LandingPage = () => {
  return (
    <div>
      <div>
        <div>
          <Head />
          <Hero />
          <div className="bodyside">
            <div>
              <Side />
            </div>
            <div>
              <Body />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
