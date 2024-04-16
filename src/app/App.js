import "./App.css";
import { LoginPage } from "./components/login/login";
import NavigationPage from "./components/login/Header/homePage";
import Footerbar from "./components/login/Footer/footer";
import Success from "./components/login/success/Success";
import Error from "./components/login/error/error";


function App() {
  return (
    <div>
      {/* <LoginPage /> */}
      <NavigationPage />
      <Footerbar/>
      {/* <Success/> */}
      {/* <Error/> */}
    </div>
  );
}

export default App;
