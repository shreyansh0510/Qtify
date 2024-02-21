import React, { useState } from "react";
import styles from "./Section.module.css"

import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
// import Card from "../Card/Card";

function Section({ title, data, type }) {
  // state ("carouselToggle") to display either "show all" or "collapse" text
  const [carouselToggle, setCarouselToggle] = useState(true);

  // manage state("carouselToggle")
  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };


  console.log("section-data", data)

  return (
    <>
      {/* header section containing "title" and toggle "text"  */}
      <div className={styles.header} >
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse" : "Show All"}
        </h4>
      </div>


      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <>
          <div className={styles.cardWrapper}>
            {/* Collapse => <Card /> 
            Show All => <Carousel /> */}
            {!carouselToggle ? (
              <div className={styles.wrapper}>
                {/* {data.map((items) => {
                  return <Card data={items} type={type} />;
                })} */}
              </div>
            ) : (
              {/* <Carousel data={data} renderComponent={(data) => <Card data={data} type={type} />} /> */ }
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Section;
