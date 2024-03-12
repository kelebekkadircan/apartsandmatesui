import React from "react";
import "./search.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="container">
        <div className="heading">
          <h1>
            Alanyada Aradığın{" "}
            <span style={{ color: "rgb(24, 62, 92)", fontWeight: "700" }}>
              Apartlar
            </span>{" "}
            Burada !
          </h1>
          <p className="subText">
            Alanyanın ilk oda arkadaşı bulma uygulaması apartsandmates.com ile
            apart bulma sıkıntısı sona eriyor !
          </p>
        </div>
        <div className="searchBar">
          <div className="searchInput">
            <input type="text" placeholder="Aradığınız apartın adını yazınız" />
          </div>
          <button>
            <span>Ara</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
