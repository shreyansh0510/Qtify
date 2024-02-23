import React from "react";
import styles from "./Container.module.css";
import { Card, CardMedia, Chip } from "@mui/material";

function Container({ image, count, title, clipText }) {
  return (
    <>
      <div className={styles.container}>
        <Card
          // id={card.key}
          sx={{ borderRadius: "10px" }}
          className={styles.containerCard}
        >
          <CardMedia className={styles.containerCardMedia} image={image} />
          <div className={styles.cardChip}>
            <Chip
              label={`${count} ${clipText}`}
              sx={{
                borderRadius: "15px",
                color: "var(--color-white)",
                backgroundColor: "var(--color-black)",
                height: "25px",
              }}
            />
          </div>
        </Card>
        <div className={styles.containerText}>{title}</div>
      </div>
    </>
  );
}

export default Container;
