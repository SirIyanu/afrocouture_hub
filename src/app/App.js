import "./App.css";
import { LoginPage } from "./components/login/login";
import React from "react";
import Head from "./components/Shop/Head";
import Hero from "./components/Shop/Hero";
import Side from "./components/Shop/Side";
import Body from "./components/Shop/Body";
import "./components/Shop/Shop.css";

function App() {
  return (
    <div>
      <LoginPage />
      <div>
      <div>
        <Head />
        <Hero />
        <div className="bodyside">
          <div>
            <Side />
          </div>
          <div>
           <Body/>
          </div>
        </div>
      </div>
      {/* <Foot /> */}
    </div>
    </div>
  );
}

export default App;

