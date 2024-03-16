import React from "react";
import "./search.scss";
import Arrow from "/img/arrow.svg";
import Search from "/img/search.svg";
import { Link } from "react-router-dom";

// export const Search = () => {
//   return (
//     <div className="search">
//       <div className="container">
//         <div className="heading">
//           <h1>
//             Alanyada Aradığın{" "}
//             <span style={{ color: "rgb(24, 62, 92)", fontWeight: "700" }}>
//               Apartlar
//             </span>{" "}
//             Burada !
//           </h1>
//           <p className="subText">
//             Alanyanın ilk oda arkadaşı bulma uygulaması apartsandmates.com ile
//             apart bulma sıkıntısı sona eriyor !
//           </p>
//         </div>
//         <div className="searchBar">
//           <div className="searchInput">
//             <input type="text" placeholder="Aradığınız apartın adını yazınız" />
//           </div>
//           <button>
//             <span>Ara</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="leftBar">
        <div className="formContainer">
          <div className="selectMenu">
            <div className="selectMenuTop">
              <input type="text" placeholder="Bölgeyi Seçiniz" />
              <div className="menuIcon">
                <img src={Arrow} alt="" />
              </div>
            </div>
            <div className="selectMenuContent"></div>
          </div>
        </div>
        <div className="formContainer">
          <div className="selectMenu">
            <div className="selectMenuTop">
              <input type="text" placeholder="Apart Tipini Seçiniz" />
              <div className="menuIcon">
                <img src={Arrow} alt="" />
              </div>
            </div>
            <div className="selectMenuContent"></div>
          </div>
        </div>
      </div>
      <Link className="rightBar">
        <div className="iconContainer">
          <img src={Search} alt="" />
        </div>
        <p>APART ARA</p>
      </Link>
    </div>
  );
};
