import React from "react";
import styles from "./Navbar.module.css";

import Logo from "../Logo/Logo";
import SearchBar from "../Search/Search";
import Button from "../Button/Button";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <a href="">
          <Logo />
        </a>
        <SearchBar placeholder="Search a song of your choice" />
        <Button children="Give Feedback" />
      </nav>
    </>
  );
}

export default Navbar;
