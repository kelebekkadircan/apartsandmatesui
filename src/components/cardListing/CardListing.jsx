import { Link, useLocation } from "react-router-dom";
import "./CardListing.scss";

export const CardListing = ({ item }) => {
  // console.log(item);

  const location = useLocation();
  const isProfilePage = location.pathname.split("/")[1];

  return (
    <div className="cardListing">
      <Link
        to={isProfilePage === "profile" ? `/list/${item._id}` : `${item._id}`}
        className="imageContainer"
      >
        <img src={item?.images[0] || "/bg.png"} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`${item._id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.priceRange.min} </p>
        <div className="bottom">
          <div className="featuresList">
            <div className="featureList">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="featureList">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
