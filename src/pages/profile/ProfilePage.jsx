import { Link, useNavigate, useParams } from "react-router-dom";
import "./profilePage.scss";
// import List from "~/components/list/List";
import { useAuthContext } from "~/hooks/auth/useAuthContext";
import { newRequest } from "~/utils/newRequest";
import { CardListing } from "~/components/cardListing/CardListing";
import { useEffect, useState } from "react";

export const ProfilePage = () => {
  const { user } = useAuthContext();
  const { id } = useParams();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();
  const [myHotels, setMyHotels] = useState([]);
  const [favoriteHotels, setFavoriteHotels] = useState([]);
  const [listError, setListError] = useState("");
  const [favError, setFavError] = useState("");

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
      setIsLoading(true);
      try {
        const response = await newRequest.get(`/users/myHotels/${id}`);
        console.log(response.data);
        setMyHotels(response.data);
      } catch (error) {
        setListError(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
    const fetchFavHotels = async () => {
      setIsLoading(true);
      try {
        const response = await newRequest.get(`/users/favorites/${id}`);
        console.log(response.data);
        setFavoriteHotels(response.data);
      } catch (error) {
        setFavError(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyHotels();
    fetchFavHotels();
  }, [id]);

  // if (error) {
  //   return <div>Error {error.message}</div>;
  // }

  console.log(user);
  console.log(myHotels);
  console.log(favoriteHotels);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className="outerDiv">
      <div className="profilePage">
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <h1>Kullanıcı Bilgileri</h1>
              <Link to={"update"}>
                <button>Profili Güncelle</button>
              </Link>
            </div>
            <div className="info">
              <span>
                Avatar:
                <img src={user?.avatar || "/favicon.png"} alt="" />
              </span>
              <span>
                Username:{" "}
                <b style={{ textTransform: "capitalize" }}>
                  {user?.details?.username}
                </b>
              </span>
              <span>
                E-mail: <b>{user?.details?.email}</b>
              </span>
              <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="title">
              <h1>Listeledigim İlanlar</h1>
              <Link to={"addHotel"}>
                <button>Yeni Post Oluştur</button>
              </Link>
            </div>

            {/* {isLoading ? (
              <div>Loading</div>
            ) : error ? (
              <div>{error.response.data.message}</div>
            ) : (
              myHotels.length > 0 &&
              myHotels.map((item) => <CardListing key={item._id} item={item} />)
            )} */}
            <div className="profileHotelContainer">
              {isLoading ? (
                <div>Loading...</div>
              ) : listError ? (
                <div>{listError}</div>
              ) : (
                myHotels?.map((item) => (
                  <CardListing key={item._id} item={item} />
                ))
              )}{" "}
            </div>

            {/* <CardListing key={item._id} item={item} /> */}
            <div className="title">
              <h1>Favori Otellerim</h1>
            </div>
            <div className="profileHotelContainer">
              {isLoading ? (
                <div>Loading...</div>
              ) : favError ? (
                <div>{favError}</div>
              ) : (
                favoriteHotels?.map((item) => (
                  <CardListing key={item._id} item={item} />
                ))
              )}{" "}
            </div>
          </div>
        </div>
        {/* <div className="chatContainer">
        <div className="wrapper"><Chat /></div>
      </div> */}
        {/* <div className="chatContainer">kadir</div> */}
      </div>
    </div>
  );
};
