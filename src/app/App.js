import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";
import { LandingPage } from "./pages/Landing";
import { IsProtectedRoute } from "./hoc/IsProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserPage } from "./pages/UserPage";

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
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}
