// import "./Notfound.scss";

// const Notfound = () => {
//   return (
//     <div className="notFound">
//       <div className="notFoundWrapper">
//         <div className="notFoundContent">
//           <div className="notFoundTitle"></div>
//           <div className="notFoundNavigator"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Notfound;

import { Link } from "react-router-dom";
import "./Notfound.scss";

const Notfound = () => {
  return (
    <div className="notFound">
      <div className="notFoundWrapper">
        <div className="notFoundContent">
          <div className="notFoundTitle">
            <h1>Aradığınız Sayfa Bulunmamaktadır </h1>
          </div>
          <div className="notFoundNavigator">
            <p style={{ color: "#333" }}>
              Ana Sayfaya Dönebilir veya Diğer Sayfalara Gezebilirsiniz
            </p>
            <div className="navigationLinks">
              <Link to="/" className="navLink">
                Ana Sayfa
              </Link>
              <Link to="/roommates" className="navLink">
                Oda Arkadaşı İlanları
              </Link>
              <Link to="/list" className="navLink">
                Otel İlanları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
