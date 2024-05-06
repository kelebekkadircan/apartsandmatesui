import { Link, useNavigate } from "react-router-dom";
import "./profilePage.scss";
// import List from "~/components/list/List";
import { useAuthContext } from "~/hooks/auth/useAuthContext";
import { newRequest } from "~/utils/newRequest";

export const ProfilePage = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("user", null);
      window.location.reload();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user.details);

  return (
    <div className="outerDiv">
      <div className="profilePage">
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <h1>User Information</h1>
              <Link to={"update"}>
                <button>Update Profile</button>
              </Link>
            </div>
            <div className="info">
              <span>
                Avatar:
                <img src={user?.details?.avatar || "/favicon.png"} alt="" />
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
              <h1>Listeledigim Oteller</h1>
              <Link to={"addHotel"}>
                <button>Create New Post</button>
              </Link>
            </div>
            {/* <List /> */}
            <div className="title">
              <h1>Favori Otellerim</h1>
            </div>
            {/* <List /> */}
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
