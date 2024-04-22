import Heading from "../../components/Homepage/heading/heading";
//import Ret from '../../components/Homepage'
import SecondSection from "../../components/Homepage/secondsection/secondsection";
import FirstPicAndClothes from "../../components/Homepage/firstpicandclothes/firstpicandclothes";
import SecondLineOfPics from "../../components/Homepage/secondlineofpics/secondlineofpics";
import ListOfPics from "../../components/Homepage/listofpics/listofpics";
import Photogrid from "../../components/Homepage/photogrid/photogrid";
import OrangeBeforeLast from "../../components/Homepage/orangebeforelast/orangebeforelast";

export default function App1() {
  return (
    <div>
      <Heading/>
      <SecondSection/>
      <FirstPicAndClothes/>
      <SecondLineOfPics/>
      <ListOfPics/>
      <Photogrid/>
      <OrangeBeforeLast/>
    </div>
  );
}

