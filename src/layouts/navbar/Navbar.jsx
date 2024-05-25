import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useLogout } from "~/hooks/auth/useLogout";
import { useAuthContext } from "~/hooks/auth/useAuthContext";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = useState(false);

  const { user } = useAuthContext();

  const { logout } = useLogout();

  const handleOut = async () => {
    await logout();
  };

  console.log(user);

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
            {!user && (
              <Link to="/login">
                <button className="RegButton">Giriş Yap</button>
              </Link>
            )}
            {user && (
              <div className="user" onClick={() => setOpen(!open)}>
                <img src={user?.avatar || "/favicon.png"} alt="" />
                {/* <span> {user?.username} </span> */}
                {open && (
                  <div className="options">
                    {user?.isHotelOwner ? (
                      <>
                        <Link to={`profile/${user?._id}`}>
                          <span> Profilim Hotel owner</span>
                        </Link>
                        <Link to={`profile/${user?._id}`}>
                          <span> Profilim</span>
                        </Link>
                        <Link to={`profile/${user?._id}`}>
                          <span> Profilim</span>
                        </Link>
                        <Link to={`profile/${user?._id}`}>
                          <span> Profilim</span>
                        </Link>
                        <span onClick={handleOut}>Log out</span>
                      </>
                    ) : (
                      <>
                        <Link to={`profile/${user?._id}`}>
                          <span> Profilim</span>
                        </Link>
                        <Link to={`profile/${user?._id}`}>
                          <span> Profilim</span>
                        </Link>
                        <Link to={`profile/${user?._id}`}>
                          <span> Profilim</span>
                        </Link>
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
