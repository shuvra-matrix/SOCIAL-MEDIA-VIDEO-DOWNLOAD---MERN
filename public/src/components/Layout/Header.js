import styles from "./Header.module.css";
import React from "react";

const Header = (props) => {
  return (
    <header className={styles["header"]}>
      <h2>Vidown</h2>
      <p>About US</p>
    </header>
  );
};

export default Header;
