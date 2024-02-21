import React from "react";
import styles from "./Homepage.module.css";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useOutletContext } from "react-router-dom"

function Homepage() {
  const { data } = useOutletContext();
  // object destructuring
  const { newAlbums, topAlbums } = data;

  return (
    <>
      <div className={styles.homepage}>
        <Hero />
        {/* <Section title="Top Albums" data={topAlbums} type="album" /> */}
        {/* <Section title="New Albums" data={newAlbums} type="album" /> */}
      </div>
    </>
  );
}
export default Homepage;
