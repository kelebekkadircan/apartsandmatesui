import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./mainLayout.scss";
import Footer from "../footer/Footer";

const Mainlayout = () => {
  return (
    <>
      <Navbar />
      <main className="outlet">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Mainlayout;
