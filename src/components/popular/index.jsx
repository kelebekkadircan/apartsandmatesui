import { NavLink } from "react-router-dom";
import "./popular.scss";
import { PopularCard } from "./PopularCard";

export const Popular = () => {
  return (
    <div className="popularSection">
      <div className="popularContainer">
        <div className="headerSection">
          <div className="leftTitle">
            <span className="title-color">En Popüler</span>
            <span>Apartlar</span>
          </div>
          <div className="rightOptions">
            <div className="subpageNav">
              <NavLink className="navLink">
                <div className="navItem">Kestel</div>
              </NavLink>
              <NavLink className="navLink">
                <div className="navItem">Oba</div>
              </NavLink>
              <NavLink className="navLink">
                <div className="navItem">Hacet</div>
              </NavLink>
              <NavLink className="navLink">
                <div className="navItem">Damlataş</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="apartCardSection">
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </div>
      </div>
    </div>
  );
};
