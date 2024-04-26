import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./mainLayout.scss";
import Footer from "../footer/Footer";
import { useAuthContext } from "~/hooks/auth/useAuthContext";

export const Mainlayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children ? children : <Outlet />}
      <Footer />
    </>
  );
};
export const RequireAuth = ({ children }) => {
  const { user } = useAuthContext();

  return !user ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Navbar />
      {children ? children : <Outlet />}
      <Footer />
    </>
  );
};
