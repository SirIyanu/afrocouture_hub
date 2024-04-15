// App.js
import React from "react";
import Head from "./components/Shop/Head";
import Hero from "./components/Shop/Hero";
import Side from "./components/Shop/Side";
import Body from "./components/Shop/Body";
// import Foot from "./components/Shop/Foot";
import "./components/Shop/Shop.css";

function App() {
  return (
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
      {/* <Foot /> */}
    </div>
  );
}

export default App;

// import React from "react";
// import Header from "./components/Layout/Header";
// import Sidebar from "./components/Layout/SideBar";
// import Hero from "./components/Layout/Hero";
// import Features from "./components/Layout/Features";
// import Footer from "./components/Layout/Footer";
// import "./components/Layout/Layout.css";

// function App() {
//   return (
//     <div className="App">
//       <div className="container">
//         <Sidebar />
//         <div className="content-wrapper">
//           <Header />
//         <main className="main-content">
//           <Hero />
//           <Features />
//         </main>

//         </div>

//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Shop from './Shop';
// // import About from './components/About';
// // import Contact from './components/Contact';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Switch>

//           <Route path="/" exact component={Shop} />
//           {/* <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} /> */}
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
// // export default Switch;
