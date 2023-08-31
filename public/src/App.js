import styles from "./App.module.css";
import Header from "./components/Layout/Header";
import React from "react";
import InputSection from "./components/UserInput/InputSection";

function App() {
  return (
    <div className={styles["main-div"]}>
      <Header />
      <InputSection />
    </div>
  );
}

export default App;
