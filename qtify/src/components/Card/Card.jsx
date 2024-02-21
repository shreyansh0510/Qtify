import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

function Card({ data, type }) {

  console.log("card", type)
  console.log("card", data)


  const getCard = (type) => {
    if (type === "album") {
      return (
        <>
          <Tooltip title={"null"} placement="top">
            <a href="/">
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <img
                    src={data.image}
                    width={159}
                    alt="album"
                    loading="lazy"
                    className={styles.coverImage}
                  />
                  <div className={styles.banner}>
                    <Chip
                      label={`${data.follows} Follows`}
                      className={styles.chip}
                      size="small"
                    />
                  </div>
                </div>
                <div className={styles.wrapperTitle}>{data.title}</div>
              </div>
            </a>
          </Tooltip>
        </>
      );
    } else if (type === "songs") {
      return (
        <>
          <Tooltip title={"null"} placement="top">
            <a href="/">
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <img
                    src={require("../../assets/headphone.png")}
                    // src={image}
                    width={159}
                    alt="album"
                    loading="lazy"
                  // className={styles.coverImage}
                  />
                  <div className={styles.banner}>
                    <Chip
                      label="100 Likes"
                      className={styles.chip}
                      size="small"
                    />
                  </div>
                </div>
                <div className={styles.wrapperTitle}>New English Songs</div>
              </div>
            </a>
          </Tooltip>
        </>
      );
    } else {
      return <></>;
    }
  };

  return getCard(type);
}

export default Card;
