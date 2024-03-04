import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./mainLayout.scss";

const Mainlayout = () => {
  return (
    <div className="mainLayout">
      <Navbar />
      <main className="outlet">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Mainlayout;
