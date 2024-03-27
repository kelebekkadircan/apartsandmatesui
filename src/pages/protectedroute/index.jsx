import { Navigate } from "react-router-dom";
import { useAuthContext } from "~/hooks/auth/useAuthContext";
import { useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  console.log("Protected Route", user);

  const { pathname } = useLocation();

  console.log("Protected Route", pathname);

  if (user == null || !user) {
    return <Navigate to="/login" replace={true} />;
  }

  if (user && pathname === "/login") {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};
