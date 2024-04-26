import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";
import { LandingPage } from "./pages/Landing";
import { IsProtectedRoute } from "./hoc/IsProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserPage } from "./pages/UserPage";
import React from "react";
import { VerificationPage } from "./pages/Verification";
import { ShopPage } from "./pages/ShopPage";
import { Body } from "./components/Shop/Body/Body";
import { Seller } from "./pages/Seller";
import { Cart } from "./pages/Cart";
// import App1 from "./pages/Landing/index";

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
    path: "/Landing",
    element: <LandingPage />,
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
