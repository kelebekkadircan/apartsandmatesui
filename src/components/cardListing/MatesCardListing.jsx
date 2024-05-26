import { Link, useLocation, useNavigate } from "react-router-dom";
import "./MatesCardListing.scss";
import { useEffect, useState } from "react";
import { newRequest } from "~/utils/newRequest";
// import { FaPhone } from "react-icons/fa";

export const MatesCardListing = ({ item }) => {
  // console.log(item);

  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();
  const isProfilePage = location.pathname.split("/")[1];

  useEffect(() => {
    const userFetch = async () => {
      const res = await newRequest.get(`users/${item?.userId}`);
      //    console.log(res.data);
      setUsers(res.data);
    };
    const fetchUser = async () => {
      const res = await newRequest.get(`users/auth/me`);
      setCurrentUser(res.data);
    };
    fetchUser();

    userFetch();
  }, [item]);

  const { _id } = currentUser;

  const handleSavePost = async () => {
    // if (!currentUser) {
    //   navigate("/login");
    // }
    try {
      await newRequest.post(`users/${_id}/favoriteposts/${item?._id}`);
      if (isProfilePage === "profile") {
        window.location.reload();
      }
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  console.log(currentUser);

  return (
    <div className="MatescardListing">
      <Link
        to={
          isProfilePage === "profile"
            ? `/roommates/${item?._id}`
            : `${item?._id}`
        }
        className="MatesimageContainer"
      >
        <img src={item?.images[0] || "/bg.png"} alt="" />
      </Link>
      <div className="textContainer">
        <div className="userInfoPart">
          <img src={users?.avatar || "/favicon.png"} alt="" />
          <div className="Matesname">{users?.firstname}</div>
          <div
            className={`${
              users?.sex === "erkek" ? "MatesSexInfo" : "MatesSexInfoFemale"
            } `}
          >
            {users?.sex}
          </div>
        </div>
        <h2 className="title">
          <Link
            to={
              isProfilePage === "profile"
                ? `/roommates/${item?._id}`
                : `${item?._id}`
            }
          >
            {item?.title.substring(0, 30)}...
          </Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item?.address}</span>
        </p>
        <div className="price">
          <div className="bottom">
            <p style={{ marginRight: "5px" }}>{item?.min} </p>
            <span>₺ Aylık</span>
          </div>
          <div className="icons">
            <div onClick={handleSavePost} className="icon">
              {currentUser?.myLikes?.includes(item?._id) ? (
                <img src="/img/saved.svg" alt="" />
              ) : (
                <img src="/img/unsaved.svg" alt="" />
              )}
              {/* <img src={saved ? "/img/saved.svg" : "/img/unsaved.svg"} alt="" /> */}
            </div>
          </div>
          {/* <div className="PhoneInfos">
            <div className="iconContainer">
              <FaPhone />
            </div>
            {users?.phoneNumber}
          </div> */}
        </div>
      </div>
    </div>
  );
};

// <div className="bottom">
//   <div className="featuresList">
//     {/* {tags.map((item, i) => (
//       <div key={i} className="featureList">
//         <img src={`/img/${item.tag}.svg`} alt="" />
//       </div>
//     ))} */}
//   </div>
//   {/* <div className="icons">
//     <div className="icon">
//       <img src="/save.png" alt="" />
//     </div>
//   </div> */}
// </div>
