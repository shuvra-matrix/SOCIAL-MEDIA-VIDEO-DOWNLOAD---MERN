import ThemeButton from "../UI/ThemeButton";
import styles from "./Header.module.css";
import React from "react";

const Header = (props) => {
  return (
    <header className={styles["header"]}>
      <a href="/">
        <h2>
          Vi<span>do</span>wn
        </h2>
      </a>

      <ThemeButton />
    </header>
  );
};

export default Header;
