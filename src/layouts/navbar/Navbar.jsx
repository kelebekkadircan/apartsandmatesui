// import { useState } from "react";
// import "./navbar.scss";
// import { Link, useNavigate } from "react-router-dom";
// // import { useLogout } from "~/hooks/auth/useLogout";
// import { useAuthContext } from "~/hooks/auth/useAuthContext";

// const Navbar = () => {
//   // const [openMenu, setOpenMenu] = useState(false);
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const { user } = useAuthContext();

//   // const { logout } = useLogout();

//   // const handleOut = async () => {
//   //   await logout();
//   // };

//   console.log(user);

//   return (
//     <div className="navbar">
//       <div className="container">
//         <div className="left">
//           <Link to="/" className=" link">
//             <div className="logo">
//               Aparts<span className="andSign">&</span>Mates
//             </div>
//           </Link>
//         </div>
//         <div className="right">
//           <div className="linkPart">
//             <Link className="favoriteIcon" to="/favorites">
//               {/* <FavoriteBorderIcon /> */}
//             </Link>

//             <Link to="/roommates">
//               <button className="findmate">Oda Arkadaşı Bul</button>
//             </Link>
//             {!user && (
//               <Link to="/login">
//                 <button className="RegButton">Oturum Aç</button>
//               </Link>
//             )}
//             {!user && (
//               <Link to="/register">
//                 <button className="LogButton">Kaydol</button>
//               </Link>
//             )}
//             {user && (
//               <div className="user" onClick={() => setOpen(!open)}>
//                 <img
//                   onClick={() => navigate(`profile/${user?._id}`)}
//                   src={user?.avatar || "/favicon.png"}
//                   alt=""
//                 />
//                 {/* <span> {user?.username} </span> */}
//                 {/* {open && (
//                   <div className="options">
//                     {user?.isHotelOwner ? (
//                       <>
//                         <Link to={}>
//                           <span> Profilim Hotel owner</span>
//                         </Link>
//                         <Link to={`profile/${user?._id}`}>
//                           <span> Profilim</span>
//                         </Link>
//                         <Link to={`profile/${user?._id}`}>
//                           <span> Profilim</span>
//                         </Link>
//                         <Link to={`profile/${user?._id}`}>
//                           <span> Profilim</span>
//                         </Link>
//                         <span onClick={handleOut}>Log out</span>
//                       </>
//                     ) : (
//                       <>
//                         <Link to={`profile/${user?._id}`}>
//                           <span> Profilim</span>
//                         </Link>
//                         <Link to={`profile/${user?._id}`}>
//                           <span> Profilim</span>
//                         </Link>
//                         <Link to={`profile/${user?._id}`}>
//                           <span> Profilim</span>
//                         </Link>
//                         <span onClick={handleOut}>Log out</span>
//                       </>
//                     )}
//                   </div>
//                 )} */}
//               </div>
//             )}
//           </div>
//           {/* <div className="menuIcon">
//             <img
//               src="/menu.png"
//               alt=""
//               onClick={() => setOpenMenu((prev) => !prev)}
//             />
//           </div> */}
//         </div>
//         {/* {openMenu ? (
//           <div className="menu">
//             <Link className="link" to="/about">
//               Hakkımızda
//             </Link>
//             <Link className="link" to="/favorites">
//               Favoriler
//             </Link>
//             <Link className="link" to="/contact">
//               İletişim
//             </Link>
//             <Link className="link" to="/roommates">
//               Oda Arkadaşı Bul
//             </Link>
//           </div>
//         ) : null} */}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "~/hooks/auth/useAuthContext";
// import { useLogout } from "~/hooks/auth/useLogout";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuthContext();
  // const { logout } = useLogout();

  // const handleLogout = async () => {
  //   await logout();
  //   navigate("/login");
  //   console.log("User logged out");
  // };

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <Link to="/" className="link">
            <div className="logo">
              Aparts<span className="andSign">&</span>{" "}
              <span style={{ color: "#0097B2" }}>Mates</span>
            </div>
          </Link>
        </div>
        <div className="right">
          <div className="linkPart">
            <Link className="favoriteIcon" to="/favorites">
              {/* Add your favorite icon component here */}
            </Link>

            <Link to="/roommates?district=&sexSituation=&min=">
              <button className="findmate roommates">Oda Arkadaşı Bul</button>
            </Link>
            <Link to="/dorm">
              <button className="findmate addhotel">Otelimi Ekle</button>
            </Link>
            {!user ? (
              <>
                <Link to="/login">
                  <button className="RegButton">Oturum Aç</button>
                </Link>
                <Link to="/register">
                  <button className="LogButton">Kaydol</button>
                </Link>
              </>
            ) : (
              <div className="user" onClick={() => setOpen(!open)}>
                <img
                  onClick={() => navigate(`profile/${user?._id}`)}
                  src={user?.avatar || "/favicon.png"}
                  alt=""
                />
                {/* {open && (
                  <div className="options">
                    {user?.isHotelOwner ? (
                      <>
                        <Link to={`profile/${user?._id}`}>
                          <span>Profilim (Hotel Owner)</span>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to={`profile/${user?._id}`}>
                          <span>Profilim</span>
                        </Link>
                      </>
                    )}
                    <span onClick={handleLogout}>Çıkış Yap</span>
                  </div>
                )} */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
