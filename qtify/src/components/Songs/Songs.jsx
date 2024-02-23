import React from "react";
import styles from "./Songs.module.css";
import Section from "../Section/Section";

function Songs({ songsData }) {
  return (
    <div className={styles.songs}>
      <div>
        <Section title="Songs" data={songsData} tab />
      </div>
    </div>
  );
}

export default Songs;
