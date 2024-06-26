/* eslint-disable no-unused-vars */

// import { apartTypes, districtData } from "~/lib/dummydata";
import "./searchBarMobil.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { newRequest } from "~/utils/newRequest";

const SearchBarMobil = () => {
  const [query, setQuery] = useState({
    district: "",
    apartType: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [districtData, setDistrictData] = useState([]);
  const [apartTypes, setApartTypes] = useState([]);
  const [districts, setDistricts] = useState({});
  const [types, setTypes] = useState({});

  const handleClick = (e) => {
    e.preventDefault();

    console.log(e.target.attributes.value.nodeValue);
    console.log(e.target.attributes.name.nodeValue);

    setQuery((prev) => ({
      ...prev,
      [e.target.attributes.name.nodeValue]: e.target.attributes.value.nodeValue,
    }));

    setDistricts({});
    setTypes({});
  };

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.attributes.name.nodeValue === "district") {
      setDistricts(
        districtData.filter((district) =>
          district.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
    if (e.target.attributes.name.nodeValue === "apartType") {
      setTypes(
        apartTypes.filter((type) =>
          type.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }

    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    if (e.target.value === "") {
      setDistricts({});
      setTypes({});
    }
  };

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      try {
        const resDistrict = await newRequest.get("hotels/districts");
        // const { districts } = resDistrict.data;
        setDistrictData(resDistrict.data);
        const resTypes = await newRequest.get("hotels/types");
        // const { types } = resTypes.data;
        setApartTypes(resTypes.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // console.log(districtData);
  // console.log(apartTypes);
  // console.log(districts, "districts");

  return (
    <div className="containerMobilBar">
      <div className="mobilDistrict">
        <div className="inputWrapper">
          <input
            type="text"
            name="district"
            placeholder="Mahalleyi Giriniz..."
            onChange={handleChange}
            value={query.district && query.district}
            id="district"
            onClick={
              (e) => setDistricts(districtData)
              // setDistricts(
              //   districtData.filter((district) =>
              //     district.name
              //       .toLowerCase()
              //       .includes(e.target.value.toLowerCase())
              //   )
              // )
            }
          />
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          districts.length > 0 && (
            <div className="listDistricts">
              <div
                className="districtItem"
                name="district"
                value=""
                onClick={(e) => handleClick(e)}
              >
                Hepsi
              </div>
              {districts?.map((d, index) => (
                <div
                  className="districtItem"
                  key={index}
                  name="district"
                  value={d.value}
                  onClick={(e) => handleClick(e)}
                >
                  {d.name}
                </div>
              ))}
            </div>
          )
        )}
      </div>
      <div className="mobilType">
        <div className="inputWrapper">
          <input
            type="text"
            name="apartType"
            placeholder="Apart Tipini Giriniz..."
            onChange={handleChange}
            value={query.apartType}
            onClick={
              (e) => setTypes(apartTypes)
              // setTypes(
              //   apartTypes.filter((type) =>
              //     type.name.toLowerCase().includes(e.target.value.toLowerCase())
              //   )
              // )
            }
          />
        </div>
        {types.length > 0 && (
          <div className="listDistricts">
            <div
              className="districtItem"
              name="apartType"
              placeholder="Apart Tipini Giriniz..."
              value=""
              onClick={(e) => handleClick(e)}
            >
              Hepsi
            </div>
            {types?.map((d, index) => (
              <div
                className="districtItem"
                key={index}
                name="apartType"
                placeholder="Apart Tipini Giriniz..."
                value={d.value}
                onClick={(e) => handleClick(e)}
              >
                {d.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mobilSearchButton">
        <Link
          to={`/list?district=${query.district}&type=${query.apartType}`}
          className="rightBar"
        >
          <div className="iconContainer">
            <img src="/img/search.svg" alt="" />
          </div>

          <p>Apart Ara</p>
        </Link>
      </div>
      {/* <div style={{ backgroundColor: "#0097B2" }} className="mobilSearchButton">
        <Link
          to={`/roommates?district=${query.district}&sexSituation=${query.apartType}`}
          className="rightBar"
        >
          <div className="iconContainer">
            <img src="/img/search.svg" alt="" />
          </div>

          <p>Mates Ara</p>
        </Link>
      </div> */}
    </div>
  );
};

export default SearchBarMobil;
