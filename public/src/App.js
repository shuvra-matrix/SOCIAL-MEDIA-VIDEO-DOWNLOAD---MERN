import styles from "./App.module.css";
import Header from "./components/Layout/Header";
import React from "react";
import UserInput from "./components/UserInput/UserInput";

function App() {
  return (
    <div className={styles["main-div"]}>
      <div className={styles["grade-top"]}></div>
      <div className={styles["grade-bottom"]}></div>
      <Header />
      <UserInput />
    </div>
  );
}

export default App;
