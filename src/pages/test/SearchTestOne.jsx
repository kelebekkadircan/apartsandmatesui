import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchTestOne.scss";

const SearchTestOne = () => {
  const [district, setDistrict] = useState("");
  // console.log(district);
  const [results, setResults] = useState([]);
  // const [show, setShow] = useState(false);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter((user) => {
          return (
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(result);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setDistrict(e.target.value);
    fetchData(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setDistrict(e.target.innerText.toLowerCase());
  };

  console.log(district);
  return (
    <div className="searchcontainer">
      <div className="inputWrapper">
        <FaSearch id="search-icon" className="searchIcon" />
        <input
          type="text"
          placeholder="Type to search..."
          value={district}
          name="district"
          onChange={handleChange}
        />
      </div>
      <div className="resultList">
        {results.map((result, i) => {
          return (
            <div
              onClick={handleClick}
              value={result.name}
              className="searchResult"
              key={i}
            >
              {result.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchTestOne;
