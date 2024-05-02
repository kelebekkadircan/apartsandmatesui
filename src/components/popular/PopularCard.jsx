import { FaBed } from "react-icons/fa";
import { FaWifi, FaSwimmingPool } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";

import { Link } from "react-router-dom";
import "./popularcard.scss";

export const PopularCard = ({ data }) => {
  return (
    <div className="PopularCard">
      <div className="container">
        <div className="top">
          <img src={data.images[0]} alt="" />
          <div className="popularCardOverlay">
            <Link to={`/list/${data._id}`}>
              <p className="overlayButton">İncele</p>
            </Link>
          </div>
        </div>
        <div className="bottom">
          <h1 className="location">
            {" "}
            {data.address.substring(0, 30) + "..."}{" "}
          </h1>
          <h3 className="title"> {data.title.substring(0, 20) + "..."} </h3>
          <div className="infos">
            <div className="infoCard">
              <div className="iconCard">
                <FaBed />
              </div>
              <div className="infoTxt">{data.bedCount} Yatak</div>
            </div>
            <div style={{ borderRight: "none" }} className="infoCard">
              <div className="iconCard">
                {data.tags.includes("kahvalti") ? (
                  <FaBowlFood />
                ) : data.tags.includes("yuzmehavuzu") ? (
                  <FaSwimmingPool />
                ) : (
                  <FaWifi />
                )}
              </div>
              <div className="infoTxt">
                {data.tags.includes("kahvalti")
                  ? "Kahvaltı"
                  : data.tags.includes("yuzmehavuzu")
                  ? "Havuz"
                  : "Wifi"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
