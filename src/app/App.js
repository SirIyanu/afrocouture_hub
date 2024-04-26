import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
=======

>>>>>>> afcf2ae454f399c0a4559ff1122f8877612f982e
import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";
import { LandingPage } from "./pages/Landing";
import { IsProtectedRoute } from "./hoc/IsProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserPage } from "./pages/UserPage";
import React from "react";
import { VerificationPage } from "./pages/Verification";
<<<<<<< HEAD
import { ShopPage } from "./pages/Shop";
=======
import { ShopPage } from "./pages/ShopPage";
import { Body } from "./components/Shop/Body/Body";
import { Seller } from "./pages/Seller";
import { Cart } from "./pages/Cart";
// import App1 from "./pages/Landing/index";
>>>>>>> afcf2ae454f399c0a4559ff1122f8877612f982e

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <IsProtectedRoute>
        <LandingPage />
      </IsProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/verification",
    element: <VerificationPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
<<<<<<< HEAD
    path:"/product",
    element:<Product />,
=======
    path: "/Landing",
    element: <LandingPage />,
>>>>>>> afcf2ae454f399c0a4559ff1122f8877612f982e
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
  {
    element: <Body />,
  },
  {
    path: "/seller",
    element: <Seller/>
  },
  {
    path: "/cart",
    element: <Cart/>
  }
]);
export function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}
