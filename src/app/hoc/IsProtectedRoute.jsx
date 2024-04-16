import { isUserLogin } from "../utils/user";

export const IsProtectedRoute = ({ children }) => {
  const user = isUserLogin;
  if (user) {
    return children;
  }
  window.location.href = "/login";
  return null;
};
