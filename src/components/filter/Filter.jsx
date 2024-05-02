import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./filter.scss";

function Filter() {
  // query params for search filter and search results page
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState({
    district: searchParams.get("district") || "",
    type: searchParams.get("type") || "",
    // property: searchParams.get("property") || "",
    min: searchParams.get("min") || 1,
    max: searchParams.get("max") || 100000,
    // bedroom: searchParams.get("bedroom") || 1,
  });

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

  return (
    <div className="filter">
      <h1>
        <b style={{ textTransform: "capitalize" }}>
          {query.district || "Alanya  "}
        </b>{" "}
        <div> Arama Sonuçları</div>{" "}
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="district">Location</label>
          {/* <input
            onChange={handleChange}
            type="text"
            id="district"
            name="district"
            value={query.district}
            placeholder="Mahalle Giriniz..."
            defaultValue={query.district}
          /> */}
          <select
            defaultValue={query.district}
            onChange={handleChange}
            name="district"
            id="district"
          >
            <option value="">Alanya</option>
            <option value="kestel">Kestel</option>
            <option value="oba">Oba</option>
          </select>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select
            defaultValue={query.type}
            onChange={handleChange}
            name="type"
            id="type"
          >
            <option value="">Karışık</option>
            <option value="erkek">Erkek</option>
            <option value="kadin">Kadın</option>
          </select>
        </div>
        {/* <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property" defaultValue={query.property}>
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div> */}
        <div className="item">
          <label htmlFor="min">Min Price</label>
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
        <div className="item">
          <label htmlFor="max">Max Price</label>
          <input
            defaultValue={query.max}
            onChange={handleChange}
            type="text"
            id="max"
            name="max"
            placeholder="any"
          />
        </div>
        {/* <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            defaultValue={query.bedroom}
            onChange={handleChange}
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
          />
        </div> */}
        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
