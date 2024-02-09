import style from "./IndexMessage.module.css";

import React from "react";

const IndexMessage = () => {
  return (
    <div className={style["index-div"]}>
      <h1>
        <span className={style["head-one"]}>Vidown </span>
        <span className={style["head-two"]}>Video </span>
        Do<span className={style["head-three"]}>wnload</span>er
      </h1>
      <p>
        Try this unique tool for quick, hassle-free downloads from YouTube ,
        Facebook, Instagram and X. Transform your offline video collection with
        this reliable and efficient downloader.
      </p>

      <img
        className={style["yt-logo"]}
        width="144"
        height="144"
        src="https://img.icons8.com/fluency/144/youtube-play.png"
        alt="youtube-play"
      />
      <img
        className={style["fb-logo"]}
        width="144"
        height="144"
        src="https://img.icons8.com/fluency/144/facebook-new.png"
        alt="facebook-new"
      />
      <img
        className={style["insta-logo"]}
        width="144"
        height="144"
        src="https://img.icons8.com/fluency/144/instagram-new.png"
        alt="instagram-new"
      />
      <img
        className={style["x-logo"]}
        width="144"
        height="144"
        src="https://img.icons8.com/fluency/144/twitter.png"
        alt="twitter"
      />
    </div>
  );
};

export default IndexMessage;
