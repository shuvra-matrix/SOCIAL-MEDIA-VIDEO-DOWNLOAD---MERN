import styles from "./Header.module.css";
import React from "react";

const Header = (props) => {
  return (
    <header className={styles["header"]}>
      <a href="/">
        <h2>Vidown</h2>
      </a>
      <a
        href="https://github.com/shuvra-matrix/SOCIAL-MEDIA-VIDEO-DOWNLOAD---MERN"
        target="_blank"
        rel="noreferrer"
      >
        <h4>About Us</h4>
      </a>
    </header>
  );
};

export default Header;
