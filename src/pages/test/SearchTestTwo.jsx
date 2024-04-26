import { useState } from "react";
import "./searchTestTwo.scss";
import { Users } from "~/data";
import { Table } from "./Table";

const SearchTestTwo = () => {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];

  console.log(Users[0]);

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div className="appSearch">
      <input
        type="text"
        placeholder="Search..."
        className="searchTwo"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <ul className="listTwo">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user, i) => (
          <li className="listItemTwo" key={i}>
            {user.first_name}
          </li>
        ))}
      </ul> */}
      <Table data={search(Users)} />
    </div>
  );
};

export default SearchTestTwo;
