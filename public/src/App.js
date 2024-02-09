import styles from "./App.module.css";
import Header from "./components/Layout/Header";
import React, { Fragment } from "react";
import UserInput from "./components/UserInput/UserInput";
import IndexMessage from "./components/Layout/IndexMessage";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Fragment>
      <div className={styles["main-div"]}>
        <Header />
        <IndexMessage />
        <UserInput />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
