import { Link, useLocation, useNavigate } from "react-router-dom";
import "./CardListing.scss";
import { useEffect, useState } from "react";
import { newRequest } from "~/utils/newRequest";

export const CardListing = ({ item }) => {
  // console.log(item);

  const [tags, setTags] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  const navigate = useNavigate();

  const location = useLocation();
  const isProfilePage = location.pathname.split("/")[1];

  useEffect(() => {
    const featureFetch = async () => {
      const res = await newRequest.get(`hotels/priority/${item?._id}`);
      console.log(res.data);
      setTags(res.data);
    };
    const fetchUser = async () => {
      const res = await newRequest.get(`users/auth/me`);
      setCurrentUser(res.data);
    };
    fetchUser();
    featureFetch();
  }, [item]);

  const { _id } = currentUser;

  const handleSaveHotel = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    try {
      await newRequest.post(`users/${_id}/favorites/${item?._id}`);
      if (isProfilePage === "profile") {
        window.location.reload();
      }
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  console.log(currentUser);
  console.log(isProfilePage);
  return (
    <div className="cardListing">
      <Link
        to={isProfilePage === "profile" ? `/list/${item?._id}` : `${item?._id}`}
        className="imageContainer"
      >
        <img src={item?.images[0] || "/bg.png"} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link
            to={
              isProfilePage === "profile"
                ? `/list/${item?._id}`
                : `${item?._id}`
            }
          >
            {item?.title}
          </Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item?.address}</span>
        </p>
        <div className="price">
          <p>{item?.min} </p>
          <span>₺`den Başlayan Fiyatlarla</span>
        </div>
        <div className="bottom">
          <div className="featuresList">
            {tags.map((item, i) => (
              <div key={i} className="featureList">
                <img src={`/img/${item.tag}.svg`} alt="" />
              </div>
            ))}
          </div>
          <div className="icons">
            <div onClick={handleSaveHotel} className="icon">
              {currentUser?.favoriteHotels?.includes(item?._id) ? (
                <img src="/img/saved.svg" alt="" />
              ) : (
                <img src="/img/unsaved.svg" alt="" />
              )}
              {/* <img src={saved ? "/img/saved.svg" : "/img/unsaved.svg"} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
