import "./popularcard.scss";
import { FaBed } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";

export const PopularCard = ({ data }) => {
  console.log(data);
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
              <div className="infoTxt">150 Yatak</div>
            </div>
            <div style={{ borderRight: "none" }} className="infoCard">
              <div className="iconCard">
                <FaWifi />
              </div>
              <div className="infoTxt">Wifi Var</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
