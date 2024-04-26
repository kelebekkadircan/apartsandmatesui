import { useState } from "react";
import "./filter.scss";
import { useSearchParams } from "react-router-dom";

function Filter() {
  // query params for search filter and search results page
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState({
    city: searchParams.get("city") || "",
    type: searchParams.get("type") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 100000,
    bedroom: searchParams.get("bedroom") || 1,
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
        Search results for <b>{query.city || "All Places"}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            onChange={handleChange}
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            defaultValue={query.city}
          />
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
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property" defaultValue={query.property}>
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            defaultValue={query.minPrice}
            onChange={handleChange}
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            defaultValue={query.maxPrice}
            onChange={handleChange}
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            defaultValue={query.bedroom}
            onChange={handleChange}
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
          />
        </div>
        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
