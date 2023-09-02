import style from "./IndexMessage.module.css";

import React from "react";

const IndexMessage = () => {
  return (
    <div className={style["index-div"]}>
      <h2>You can download any videos that are public from these sites -</h2>
      <div className={style["logo-div"]}>
        <img
          width="144"
          height="144"
          src="https://img.icons8.com/fluency/144/youtube-play.png"
          alt="youtube-play"
        />
        <img
          width="144"
          height="144"
          src="https://img.icons8.com/fluency/144/facebook-new.png"
          alt="facebook-new"
        />
        <img
          width="144"
          height="144"
          src="https://img.icons8.com/fluency/144/instagram-new.png"
          alt="instagram-new"
        />
        <img
          width="144"
          height="144"
          src="https://img.icons8.com/fluency/144/twitter.png"
          alt="twitter"
        />
      </div>
    </div>
  );
};

export default IndexMessage;
