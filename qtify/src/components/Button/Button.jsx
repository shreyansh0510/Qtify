import React from "react";
import styles from "./Button.module.css";

function Button({ children }) {
  return <div className={styles.button}>{children}</div>;
}

export default Button;
