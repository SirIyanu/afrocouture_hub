import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import { LoginPage } from "./components/login/login";
import NavigationPage from "./components/login/Header/homePage";
import Footerbar from "./components/login/Footer/footer";
import Success from "./components/login/success/Success";
import Error from "./components/login/error/error";

=======
import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";
import { LandingPage } from "./pages/Landing";
import { IsProtectedRoute } from "./hoc/IsProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserPage } from "./pages/UserPage";
import React from "react";
>>>>>>> 5cc331c0745cf581b9ea607e9105bfe1b7857f92

import "./components/Shop/Shop.css";

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
    path: "/userPage",
    element: <UserPage />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);
export function App() {
  return (
<<<<<<< HEAD
    <div>
      {/* <LoginPage /> */}
      <NavigationPage />
      <Footerbar/>
      {/* <Success/> */}
      {/* <Error/> */}
    </div>
=======
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
>>>>>>> 5cc331c0745cf581b9ea607e9105bfe1b7857f92
  );
}
