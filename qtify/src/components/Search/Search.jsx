import { useState } from "react";
import React from "react";
import styles from "./Search.module.css";
import SearchIcon from "../../assets/search.jpg";

function Search({ placeholder }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    console.log("handleChange");
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
  };

  return (
    <>
      <div className="wrapper">
        <input
          type="text"
          placeholder={placeholder}
          name={search}
          value={search}
          onChange={handleChange}
          className={styles.search}
        />
        <button className={styles.searchButton} type="submit">
          {/* <SearchIcon /> */}
          <img src={SearchIcon} alt="search-icon" />
        </button>
      </div>
    </>
  );
}

export default Search;
