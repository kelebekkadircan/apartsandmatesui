/* eslint-disable react/no-unescaped-entities */
import { NavLink, useLocation } from "react-router-dom";
import "./header.scss";

export const Header = ({ params }) => {
  console.log(params);

  const loc = useLocation();
  const location = loc.pathname.split("/")[1];
  console.log(location);
  return (
    <div className="header">
      <div className="container">
        <div className="wrapper">
          <div className="left">
            <div className="breadcrumbs">
              <ul>
                <li>
                  <NavLink to="/" className="link">
                    <span>Aparts&Mates</span>
                    <span> / </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link">
                    <span className="upperCase">
                      {params ? params : "Alanya"}{" "}
                      {location === "roommates" ? null : (
                        <span>Öğrenci Apartları</span>
                      )}
                    </span>
                  </NavLink>
                </li>
              </ul>{" "}
            </div>
            <h1 className="title">
              {params ? <span> {params} </span> : <span>Alanya</span>}{" "}
              {location === "roommates" ? null : <span>Öğrenci Apartları</span>}
            </h1>
            <div className="headerText">
              <p>
                Alanya Öğrenci Apart Fiyatları ve Alanya'daki en popüler Kız ve
                Erkek öğrenci Apartları burada! Alanya'daki Üniversitelere
                yakın, en iyi ve en rahat Özel Öğrenci Yurtları hakkında bilgi
                al, en uygun oda fiyatlarını öğren!
              </p>
            </div>
            <div className="headerInfos">
              {/* <div className="infoItem">
                <img
                  className="iconMain"
                  src="https://www.yurtlarburada.com/img/icon-dorm.svg"
                  alt=""
                />
                <div className="infoText">
                  <span className="infoNumber">20</span>
                  <span>Aktif Yurt</span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="right">
            <img
              className="shapeOne"
              src="https://www.yurtlarburada.com/img/shapes/shape-11.svg"
              alt=""
            />
            <img
              className="shapeTwo"
              src="https://www.yurtlarburada.com/img/shapes/shape-12.svg"
              alt=""
            />
            <svg
              className="shapeThree"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 838.1 166.8"
              fill="#dfe7f6"
            >
              <path d="M3.2,166.8L88.6,39.6C105.2,14.9,133,0,162.8,0h353.6c23.6,0,46.2,9.4,62.8,26.2l45.8,46h28.2  c17.4,0,34.1,7,46.4,19.3l16.9,17h47.2c9.9,0,19.3,3.9,26.3,10.9l47.2,47.4H3.2z"></path>
            </svg>
            <img
              className="shapeFour"
              // src="https://cdn-yb.ams3.cdn.digitaloceanspaces.com/uploads/cities/34/15549863741032379973.png"
              src="/micoFour.png"
              alt="usual image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
