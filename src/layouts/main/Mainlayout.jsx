import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./mainLayout.scss";

const Mainlayout = () => {
  return (
    <>
      <Navbar />
      <div className="mainLayout">
        <main className="outlet">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Mainlayout;
