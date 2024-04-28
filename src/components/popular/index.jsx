import { Link, NavLink } from "react-router-dom";
import "./popular.scss";
import { PopularCard } from "./PopularCard";
import { useEffect, useRef, useState } from "react";
import { newRequest } from "~/utils/newRequest";

export const Popular = () => {
  const [hotelData, setHotelData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [district, setDistrict] = useState("");

  // const navigate = useNavigate();

  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchPopularHotels = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        const response = await newRequest.get(
          `hotels/popular?district=${district}`,
          {
            signal: abortControllerRef.current?.signal,
          }
        );
        setHotelData(response.data);
      } catch (e) {
        if (e.name == "AbortError") {
          console.log("Request was aborted");
          return;
        }
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPopularHotels();
  }, [district]);

  // hata olursa sayfayı yenile
  if (error) {
    location.reload();
    // navigate("/login", { replace: true });
  }

  // console.log(hotelData);

  return (
    <div className="popularSection">
      <div className="popularContainer">
        <div className="headerSection">
          <div className="leftTitle">
            <Link onClick={() => setDistrict("")}>
              <span className="title-color">En Popüler</span>
              <span>Apartlar</span>
            </Link>
          </div>
          <div className="rightOptions">
            <div className="subpageNav">
              <NavLink
                className="navLink"
                onClick={() => setDistrict("kestel")}
              >
                <div className="navItem">Kestel</div>
              </NavLink>
              <NavLink onClick={() => setDistrict("oba")} className="navLink">
                <div className="navItem">Oba</div>
              </NavLink>
              <NavLink onClick={() => setDistrict("hacet")} className="navLink">
                <div className="navItem">Hacet</div>
              </NavLink>
              <NavLink
                onClick={() => setDistrict("damlatas")}
                className="navLink"
              >
                <div className="navItem">Damlataş</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="apartCardSection">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            hotelData.map((data, i) => <PopularCard key={i} data={data} />)
          )}
        </div>
      </div>
    </div>
  );
};
