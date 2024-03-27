import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./mainLayout.scss";
import Footer from "../footer/Footer";

const Mainlayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children ? children : <Outlet />}
      <Footer />
    </>
  );
};

export default Mainlayout;
