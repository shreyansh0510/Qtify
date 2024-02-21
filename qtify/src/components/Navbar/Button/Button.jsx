import React from "react";
import styles from "./Button.module.css";

function Button({ children }) {
  return (
    <>
      <div >
        <button className={styles.button}  >
          <span className={styles.buttonText}>{children}</span>
        </button>
      </div>
    </>)
}

export default Button;
