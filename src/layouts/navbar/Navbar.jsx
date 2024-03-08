import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const { pathname } = useLocation();
  const path = pathname.split("/")[1];

  console.log(path);

  const currentUser = false;

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <Link className="left link">
          <div className="logo">
            Aparts<span className="andSign">&</span>Mates
          </div>
        </Link>
        <div className="right">
          <Link className="link" to="/favorites">
            Favoriler
          </Link>

          <Link className="findmate" to="/roommates">
            Oda Arkadaşı Bul
          </Link>
          {!currentUser && (
            <Link to="/register">
              <button>Giriş Yap</button>
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
