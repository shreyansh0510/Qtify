import React from "react";
import styles from "./Album.module.css";
import Card from "../Card/Card";

function Album() {

  return (
    <div className={styles.album}>
      <div className={styles.albumHeader}>
        <div className={styles.albumTitle}>Top Albums</div>
        <div className={styles.albumShowAll}>Show all</div>
      </div>
      <div className={styles.albumCards}>
        <Card data={null} type="albums" />
      </div>
    </div>
  );
}

export default Album;
