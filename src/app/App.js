import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";
//import { LandingPage } from "./pages/Landing";
import { IsProtectedRoute } from "./hoc/IsProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserPage } from "./pages/UserPage";
import React from "react";
import { VerificationPage } from "./pages/Verification";
<<<<<<< HEAD
import { ShopPage } from "./pages/Shop";
import App1 from './pages/Landing/index'
=======
import { ShopPage } from "./pages/ShopPage";
>>>>>>> 292f7ed4399e3354f6433a2ed4d88cb769b7e0f7

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <IsProtectedRoute>
        <App1 />
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
    path: "/verification",
    element: <VerificationPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/Landing",
    element: <App1/>,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);
export function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}
