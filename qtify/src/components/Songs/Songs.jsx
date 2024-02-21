import React from "react";
import styles from "./Songs.module.css";
import Card from "../Cards/Cards";

function Songs() {
  return (
    <div className={styles.songs}>
      <div className={styles.songsHeader}>
        <div className={styles.songsTitle}>Songs</div>
      </div>
      <div className={styles.songsCards}>
        <Card data={null} type="songs" />
      </div>
    </div>
  );
}

export default Songs;
