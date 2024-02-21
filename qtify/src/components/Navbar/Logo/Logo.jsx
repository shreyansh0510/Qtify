import React from "react";
import logoImage from "../../../assets/logo.png";
import styles from "./Logo.module.css"

function Logo() {
  return (
    <>
      <div className={styles.logoContainer} >
        <img src={logoImage} alt="logo" width={67} />
      </div>
    </>
  )
}

export default Logo;
