import "./App.css";
import { LoginPage } from "./components/login/login";
import Heading from "./components/login/heading";
import SecondSection from "./components/login/secondsection";
import FirstPicAndClothes from "./components/login/firstpicandclothes";
import SecondLineOfPics from "./components/login/secondlineofpics";

function App() {
  return (
    <div>
      <Heading/>
      <SecondSection/>
      <FirstPicAndClothes/>
      <SecondLineOfPics/>
    </div>
  );
}

export default App;
