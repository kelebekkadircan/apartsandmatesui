import "./popularcard.scss";
import { FaBed } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";

export const PopularCard = () => {
  return (
    <div className="PopularCard">
      <div className="container">
        <div className="top">
          <img
            src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=400"
            // src="https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <div className="popularCardOverlay">
            <Link>
              <p className="overlayButton">İncele</p>
            </Link>
          </div>
        </div>
        <div className="bottom">
          <h1 className="location">Oba Mahallesi</h1>
          <h3 className="title">Anfora Otel</h3>
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
