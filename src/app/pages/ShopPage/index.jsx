import {Head} from "../../components/Shop/Head/Head";
import {Hero} from "../../components/Shop/Hero/Hero";
import {Side} from "../../components/Shop/Side/Side";
import {Body} from "../../components/Shop/Body/Body";
import style from "./style.module.css";


export const ShopPage = () => {
  return (
    <div>
      <div>
        <div>
          <Head />
          <Hero />
          <div className= {style.bodyside}>
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

