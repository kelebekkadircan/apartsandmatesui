// import { Link, useNavigate, useParams } from "react-router-dom";
// import "./profilePage.scss";
// // import List from "~/components/list/List";
// import { useAuthContext } from "~/hooks/auth/useAuthContext";
// import { newRequest } from "~/utils/newRequest";
// import { CardListing } from "~/components/cardListing/CardListing";
// import { useEffect, useState } from "react";

// export const ProfilePage = () => {
//   const { user } = useAuthContext();
//   const { id } = useParams();

//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   // eslint-disable-next-line no-unused-vars
//   const [error, setError] = useState();
//   const [myHotels, setMyHotels] = useState([]);
//   const [favoriteHotels, setFavoriteHotels] = useState([]);
//   const [listError, setListError] = useState("");
//   const [favError, setFavError] = useState("");

//   const handleLogout = async () => {
//     try {
//       await newRequest.post("/auth/logout");
//       localStorage.setItem("user", null);
//       window.location.reload();
//       navigate("/login");
//     } catch (error) {
//       setError(error.response.data.message);
//     }
//   };
//   useEffect(() => {
//     const fetchMyHotels = async () => {
//       setIsLoading(true);
//       try {
//         const response = await newRequest.get(`/users/myHotels/${id}`);
//         console.log(response.data);
//         setMyHotels(response.data);
//       } catch (error) {
//         setListError(error.response.data.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     const fetchFavHotels = async () => {
//       setIsLoading(true);
//       try {
//         const response = await newRequest.get(`/users/favorites/${id}`);
//         console.log(response.data);
//         setFavoriteHotels(response.data);
//       } catch (error) {
//         setFavError(error.response.data.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchMyHotels();
//     fetchFavHotels();
//   }, [id]);

//   // if (error) {
//   //   return <div>Error {error.message}</div>;
//   // }

//   console.log(user);
//   console.log(myHotels);
//   console.log(favoriteHotels);

//   return isLoading ? (
//     <div>Loading</div>
//   ) : (
//     <div className="outerDiv">
//       <div className="profilePage">
//         <div className="details">
//           <div className="wrapper">
//             <div className="title">
//               <h1>Kullanıcı Bilgileri</h1>
//               <Link to={"update"}>
//                 <button>Profili Güncelle</button>
//               </Link>
//             </div>
//             <div className="info">
//               <span>
//                 Avatar:
//                 <img src={user?.avatar || "/favicon.png"} alt="" />
//               </span>
//               <span>
//                 Username:{" "}
//                 <b style={{ textTransform: "capitalize" }}>
//                   {user?.details?.username}
//                 </b>
//               </span>
//               <span>
//                 E-mail: <b>{user?.details?.email}</b>
//               </span>
//               <button onClick={handleLogout}>Logout</button>
//             </div>
//             <div className="title">
//               <h1>Listeledigim İlanlar</h1>
//               <Link to={"addHotel"}>
//                 <button>Yeni Hotel Oluştur</button>
//               </Link>
//               <Link to={"addPost"}>
//                 <button>Yeni Post Oluştur</button>
//               </Link>
//             </div>

//             {/* {isLoading ? (
//               <div>Loading</div>
//             ) : error ? (
//               <div>{error.response.data.message}</div>
//             ) : (
//               myHotels.length > 0 &&
//               myHotels.map((item) => <CardListing key={item._id} item={item} />)
//             )} */}
//             <div className="profileHotelContainer">
//               {isLoading ? (
//                 <div>Loading...</div>
//               ) : listError ? (
//                 <div>{listError}</div>
//               ) : (
//                 myHotels?.map((item) => (
//                   <CardListing key={item._id} item={item} />
//                 ))
//               )}{" "}
//             </div>

//             {/* <CardListing key={item._id} item={item} /> */}
//             <div className="title">
//               <h1>Favori Otellerim</h1>
//             </div>
//             <div className="profileHotelContainer">
//               {isLoading ? (
//                 <div>Loading...</div>
//               ) : favError ? (
//                 <div>{favError}</div>
//               ) : (
//                 favoriteHotels?.map((item) => (
//                   <CardListing key={item._id} item={item} />
//                 ))
//               )}{" "}
//             </div>
//           </div>
//         </div>
//         {/* <div className="chatContainer">
//         <div className="wrapper"><Chat /></div>
//       </div> */}
//         {/* <div className="chatContainer">kadir</div> */}
//       </div>
//     </div>
//   );
// };

import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./profilePage.scss";
// import { useAuthContext } from "~/hooks/auth/useAuthContext";
import { newRequest } from "~/utils/newRequest";
import { CardListing } from "~/components/cardListing/CardListing";
import { MatesCardListing } from "~/components/cardListing/MatesCardListing";

export const ProfilePage = () => {
  // const { user } = useAuthContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoadingMyHotels, setIsLoadingMyHotels] = useState(false);
  const [isLoadingFavHotels, setIsLoadingFavHotels] = useState(false);
  const [error, setError] = useState(null);
  const [myHotels, setMyHotels] = useState([]);
  const [favoriteHotels, setFavoriteHotels] = useState([]);
  const [listError, setListError] = useState("");
  const [favError, setFavError] = useState("");
  const [postError, setPostError] = useState("");
  const [currentUser, setCurrentUser] = useState([]);
  // const [myPosts, setMyPosts] = useState([]);
  const [favoritePosts, setFavoritePosts] = useState([]);
  const [isLoadingFavPosts, setIsLoadingFavPosts] = useState(false);
  const [isLoadingMyPosts, setIsLoadingMyPosts] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(null); // Yeni state değişkeni
  const [isConfirmingDeletePost, setIsConfirmingDeletePost] = useState(null); // Yeni state değişkeni
  const [postListError, setPostListError] = useState("");
  const [myPosts, setMyPosts] = useState([]);

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("user", null);
      window.location.reload();
      navigate("/login");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchMyHotels = async () => {
      setIsLoadingMyHotels(true);
      try {
        const response = await newRequest.get(`/users/myHotels/${id}`);
        setMyHotels(response.data);
      } catch (error) {
        setListError(error.response.data.message);
      } finally {
        setIsLoadingMyHotels(false);
      }
    };

    const fetchFavHotels = async () => {
      setIsLoadingFavHotels(true);
      try {
        const response = await newRequest.get(`/users/favorites/${id}`);
        setFavoriteHotels(response.data);
      } catch (err) {
        setFavError(err.response.data.message);
      } finally {
        setIsLoadingFavHotels(false);
      }
    };

    const fetchFavPosts = async () => {
      setIsLoadingFavPosts(true);
      try {
        const response = await newRequest.get(`/users/likedposts/${id}`);
        setFavoritePosts(response.data);
      } catch (error) {
        setPostError(error.response.data.message);
      } finally {
        setIsLoadingFavPosts(false);
      }
    };

    const fetchUser = async () => {
      const res = await newRequest.get(`/users/auth/me`);
      setCurrentUser(res.data);
      //sconsole.log(currentUser, "Current User");
    };

    const fetchMyPosts = async () => {
      setIsLoadingMyPosts(true);
      try {
        const response = await newRequest.get(`/users/myPosts/${id}`);
        setMyPosts(response.data);
      } catch (error) {
        setPostListError(error.response.data.message);
      } finally {
        setIsLoadingMyPosts(false);
      }
    };
    fetchUser();
    fetchMyPosts();
    fetchFavPosts();
    fetchMyHotels();
    fetchFavHotels();
  }, [id, setFavoritePosts, setFavoriteHotels]);

  const handleDeleteClick = (hotelId) => {
    if (isConfirmingDelete === hotelId) {
      handleDelete(hotelId);
    } else {
      setIsConfirmingDelete(hotelId);
      setTimeout(() => setIsConfirmingDelete(null), 3000);
    }
  };

  const handleDelete = async (hotelId) => {
    try {
      console.log(hotelId);
      await newRequest.delete(`/hotels/${hotelId}`);
      setMyHotels(myHotels.filter((hotel) => hotel._id !== hotelId));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteClickPost = (postId) => {
    if (isConfirmingDeletePost === postId) {
      handleDeletePost(postId);
    } else {
      setIsConfirmingDeletePost(postId);
      setTimeout(() => setIsConfirmingDeletePost(null), 3000);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      console.log(postId);
      await newRequest.delete(`/posts/${postId}`);
      setMyPosts(myPosts.filter((posts) => posts._id !== postId));
    } catch (err) {
      console.error(err);
    }
  };

  // if (!user || !user.details) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }
  console.log(currentUser, "Current User");
  console.log(favoritePosts, "Favorite Posts");
  console.log(favoriteHotels, "Favorite Hotels");
  console.log(myHotels, "My Hotels");
  // console.log(myPosts, "My Posts");

  console.log(postListError, "Post List Error");

  return (
    <div className="outerDiv">
      <div className="profilePage">
        <div className="details">
          <div className="wrapper">
            <div className="info">
              <div className="infoUpdate">
                <h1>Kullanıcı Bilgileri</h1>
                <div className="infoUpdateButtons">
                  <Link to={"update"}>
                    <button>Profili Güncelle</button>
                  </Link>
                  <button
                    className="infoUpdateButtonsLogout"
                    onClick={handleLogout}
                  >
                    Logout
                    {error && <div>{error}</div>}
                  </button>
                </div>
              </div>
              <div className="infoWrapper">
                <div className="infoAvatar">
                  <div className="infoAvatarContainer">
                    <img src={currentUser?.avatar || "/favicon.png"} alt="" />
                  </div>
                </div>
                <div className="infoContent">
                  <div className="infoItemItem">
                    <div className="infoItemItemQuestion">Kullanıcı Adı</div>
                    <div className="infoItemItemAnswer">
                      {" "}
                      {currentUser?.username}{" "}
                    </div>
                  </div>
                  <div className="infoItemItem">
                    <div className="infoItemItemQuestion">Adı</div>
                    <div className="infoItemItemAnswer">
                      {" "}
                      {currentUser?.firstname}{" "}
                    </div>
                  </div>
                  <div className="infoItemItem">
                    <div className="infoItemItemQuestion">Soyadı</div>
                    <div className="infoItemItemAnswer">
                      {" "}
                      {currentUser?.lastname}{" "}
                    </div>
                  </div>
                  <div className="infoItemItem">
                    <div className="infoItemItemQuestion">
                      Telefon Numarası{" "}
                    </div>
                    <div className="infoItemItemAnswer">
                      {" "}
                      {currentUser?.phoneNumber}{" "}
                    </div>
                  </div>
                  <div className="infoItemItem">
                    <div className="infoItemItemQuestion">Mail Adresi</div>
                    <div className="infoItemItemAnswer">
                      {" "}
                      {currentUser?.email}{" "}
                    </div>
                  </div>
                  <div className="infoItemItem">
                    <div className="infoItemItemQuestion">Kullanıcı Tipi</div>
                    <div className="infoItemItemAnswer">
                      {" "}
                      {currentUser?.isHotelOwner
                        ? "Otel Sahibi"
                        : "Öğrenci"}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="profileHotelContainer">
              <div className="profileUpdate">
                <h1>Listelediğim Oteller</h1>

                <Link to={"addHotel"}>
                  <button>Otel Ekle</button>
                </Link>
              </div>
              {isLoadingMyHotels ? (
                <div>Loading...</div>
              ) : listError ? (
                <div>{listError}</div>
              ) : (
                myHotels?.map((item) => (
                  <div className="profileHotelCard" key={item._id}>
                    <div className="profilecardListing">
                      <CardListing item={item} />
                    </div>
                    <div className="cardOperation">
                      <button
                        className="cardOperationDelete"
                        onClick={() => handleDeleteClick(item._id)}
                      >
                        {isConfirmingDelete === item._id
                          ? "Emin misiniz?"
                          : "Sil"}
                      </button>
                      {/* <button className="cardOperationDelete">Sil</button> */}
                      {/* <Link to={`/updateHotel/${item._id}`}>
                        <button>Güncelle</button>
                      </Link> */}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="profileHotelContainer">
              <div className="profileUpdate">
                <h1>Listelediğim Postlar</h1>

                <Link to={"addPost"}>
                  <button>Post Ekle</button>
                </Link>
              </div>
              {isLoadingMyPosts ? (
                <div>Loading...</div>
              ) : postListError ? (
                <div className="profileErrorMessage">{postListError}</div>
              ) : (
                myPosts?.map((item) => (
                  <div className="profileHotelCard" key={item._id}>
                    <div className="profilecardListing">
                      <CardListing item={item} />
                    </div>
                    <div className="cardOperation">
                      <button
                        className="cardOperationDelete"
                        onClick={() => handleDeleteClickPost(item._id)}
                      >
                        {isConfirmingDeletePost === item._id
                          ? "Emin misiniz?"
                          : "Sil"}
                      </button>
                      {/* <button className="cardOperationDelete">Sil</button> */}
                      {/* <Link to={`/updateHotel/${item._id}`}>
                        <button>Güncelle</button>
                      </Link> */}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="profileHotelContainer">
              <div className="profileUpdate">
                <h1>Favori Otellerim</h1>

                {/* <Link to={"addHotel"}>
                  <button>Otel Ekle</button>
                </Link> */}
              </div>
              {isLoadingFavHotels ? (
                <div>Loading...</div>
              ) : favError ? (
                <div>{favError}</div>
              ) : (
                favoriteHotels?.map((item) => (
                  <div className="profileHotelCard" key={item._id}>
                    <div className="profilecardListing">
                      <CardListing item={item} />
                    </div>
                    {/* <div className="cardOperation">
                      <button className="cardOperationDelete">Sil</button>
                      <Link to={`/updateHotel/${item._id}`}>
                        <button>Güncelle</button>
                      </Link>
                    </div> */}
                  </div>
                ))
              )}
            </div>

            <div className="profileHotelContainer">
              <div className="profileUpdate">
                <h1>Favori Mates İlanlarım</h1>

                {/* <Link to={"addHotel"}>
                  <button>Otel Ekle</button>
                </Link> */}
              </div>
              {isLoadingFavPosts ? (
                <div>Loading...</div>
              ) : postError ? (
                <div>{postError}</div>
              ) : (
                favoritePosts?.map((item) => (
                  <div className="profileHotelCard" key={item._id}>
                    <div className="profilecardListing">
                      <MatesCardListing item={item} />
                    </div>
                    {/* <div className="cardOperation">
                      <button className="cardOperationDelete">Sil</button>
                      <Link to={`/updateHotel/${item._id}`}>
                        <button>Güncelle</button>
                      </Link>
                    </div> */}
                  </div>
                ))
              )}
            </div>

            {/* <div className="title">
              <h1>Favori Otellerim</h1>
            </div>
            <div className="favHotelContainer">
              {isLoadingFavHotels ? (
                <div>Loading...</div>
              ) : favError ? (
                <div>{favError}</div>
              ) : (
                favoriteHotels?.map((item) => (
                  <CardListing key={item._id} item={item} />
                ))
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
