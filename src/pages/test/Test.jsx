/* eslint-disable no-unused-vars */
// import SearchTestOne from "./searchTestOne";
// import SearchTestTwo from "./SearchTestTwo";
// import SearchBarMobil from "./SearchBarMobil";
// import FormRegister from "~/components/form/FormRegister";
import { useState } from "react";
import CreateHotel from "../createHotel/CreateHotel";
import { Map } from "~/components/map/Map";
import { listData } from "~/lib/dummydata";
// import "./Test.scss";

export const Test = () => {
  const data = listData;

  return (
    // <div className="test">
    //   {/* <SearchTestOne /> */}
    //   {/* <SearchTestTwo /> */}
    //   {/* <SearchBarMobil /> */}
    //   <FormRegister />
    // </div>
    <CreateHotel />
    // <div
    //   style={{
    //     height: "600px",
    //     width: "900px",
    //     backgroundColor: "gray",
    //     margin: "0 auto",
    //     // minHeight: "50vh",
    //     padding: "20px",
    //     borderRadius: "20px",
    //     marginTop: "100px",
    //   }}
    // >
    //   <Map items={data} />
    // </div>
  );
};
