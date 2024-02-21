import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroText}>100 Thousand Songs, ad-free</h1>
          <h1 className={styles.heroText}>Over thousands podcast episodes</h1>
        </div>
        <div>
          <img
            src={require("../../assets/headphone.png")}
            alt="headphone"
            height={212}
            width={212}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
