import React from "react";
import styles from "./Navbar.module.css";
import logoImage from "../../assets/logo.png";
import SearchIcon from "../../assets/search.jpg";



import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <img src={logoImage} alt="logo" width={67} />
        </div>
        <div className="wrapper">
          <input
            type="text"
            placeholder={"Search a song of your choice"}
            // name={search}
            // value={search}
            // onChange={handleChange}
            className={styles.search}
          />
          <button className={styles.searchButton} type="submit">
            <img src={SearchIcon} alt="search-icon" />
          </button>
        </div>
        <div className={styles.button}>
          <button>
            Give Feedback
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
