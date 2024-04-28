import { NavLink } from "react-router-dom";
import "./popular.scss";
import { PopularCard } from "./PopularCard";
import { useEffect, useState } from "react";
import { newRequest } from "~/utils/newRequest";

export const Popular = () => {
  const [hotelData, setHotelData] = useState([]);

  useEffect(() => {
    const popular = async () => {
      const response = await newRequest.get("hotels/popular");
      setHotelData(response.data);
    };
    popular();
  }, []);

  console.log(hotelData);

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
          {hotelData.map((data, i) => (
            <PopularCard key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
