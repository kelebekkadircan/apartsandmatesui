import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import "./filterMates.scss";
import { newRequest } from "~/utils/newRequest";

function FilterMates() {
  // query params for search filter and search results page
  const [searchParams, setSearchParams] = useSearchParams();
  const [districtData, setDistrictData] = useState([]);
  const [apartTypes, setApartTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const [query, setQuery] = useState({
    district: searchParams.get("district") || "",
    sexSituation: searchParams.get("sexSituation") || "",
    // property: searchParams.get("property") || "",
    // min: searchParams.get("min") || 1,
    // max: searchParams.get("max") || 100000,
    // bedroom: searchParams.get("bedroom") || 1,
  });

  const location = useLocation();

  const loc = location.pathname.split("/")[1];
  console.log(loc);

  const handleChange = (e) => {
    e.preventDefault();
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      try {
        const resDistrict = await newRequest.get("posts/postdistricts");
        // const { districts } = resDistrict.data;
        setDistrictData(resDistrict.data);
        const resTypes = await newRequest.get("posts/posttypes");
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

  return loading ? (
    <div>Loading</div>
  ) : error ? (
    <div>error occured</div>
  ) : (
    <div className="filterMates">
      <h1>
        <b style={{ textTransform: "capitalize" }}>
          {query.district || "Alanya  "}
        </b>{" "}
        <div>- Arama Sonuçları</div>{" "}
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="district">Mahalle</label>

          <select onChange={handleChange} name="district" id="district">
            <option value="">Hepsi</option>
            {districtData.map((mahalle, i) => (
              <option key={i} value={mahalle.value}>
                {mahalle.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="sexSituation">Tip</label>
          <select
            defaultValue={query.sexSituation}
            onChange={handleChange}
            name="sexSituation"
            id="sexSituation"
          >
            <option value="">Hepsi</option>
            {loc !== "roommates" ? (
              apartTypes.map((type, i) => (
                <option key={i} value={type.value}>
                  {type.name}
                </option>
              ))
            ) : (
              <>
                <option value="erkekolabilir">Erkek</option>
                <option value="kadinolabilir">Kadın</option>
              </>
            )}
          </select>
        </div>

        <div className="item">
          <label htmlFor="min">Fiyat</label>
          <input
            defaultValue={query.min}
            onChange={handleChange}
            type="number"
            id="min"
            name="min"
            placeholder="any"
            min={1}
          />
        </div>

        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default FilterMates;
