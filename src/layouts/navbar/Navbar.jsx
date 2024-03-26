import { useState } from "react";
import "./navbar.scss";
import { newRequest } from "~/utils/newRequest";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const handleOut = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("user", null);
      navigate("/login");
    } catch (err) {}
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <Link to="/" className=" link">
            <div className="logo">
              Aparts<span className="andSign">&</span>Mates
            </div>
          </Link>
        </div>
        <div className="right">
          <div className="linkPart">
            <Link className="favoriteIcon" to="/favorites">
              {/* <FavoriteBorderIcon /> */}
            </Link>

            <Link className="findmate" to="/roommates">
              <button className="">Oda Arkadaşı Bul</button>
            </Link>
            {!currentUser && (
              <Link to="/login">
                <button className="RegButton">Giriş Yap</button>
              </Link>
            )}
            {currentUser && (
              <div className="user" onClick={() => setOpen(!open)}>
                <img
                  src="https://images.pexels.com/photos/4484954/pexels-photo-4484954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                {/* <span> {currentUser?.username} </span> */}
                {open && (
                  <div className="options">
                    {currentUser?.isOwner ? (
                      <>
                        <span>otel Profilim</span>
                        <span>otel Profilim</span>
                        <span>otel Profilim</span>
                        <span>otel Profilim</span>
                        <span>otel Profilim</span>
                      </>
                    ) : (
                      <>
                        <span>Profilim</span>
                        <span>Profilim</span>
                        <span>Profilim</span>
                        <span>Profilim</span>
                        <span>Profilim</span>
                        <span onClick={handleOut}>Log out</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="menuIcon">
            <img
              src="/menu.png"
              alt=""
              onClick={() => setOpenMenu((prev) => !prev)}
            />
          </div>
        </div>
        {openMenu ? (
          <div className="menu">
            <Link className="link" to="/about">
              Hakkımızda
            </Link>
            <Link className="link" to="/favorites">
              Favoriler
            </Link>
            <Link className="link" to="/contact">
              İletişim
            </Link>
            <Link className="link" to="/roommates">
              Oda Arkadaşı Bul
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
