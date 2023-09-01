import style from "./UserInput.module.css";
import InputSection from "./InputSection";
import ResultSection from "../ResultSection/ResultSection";
import Loader from "../UI/Loader";
import { useState } from "react";

const UserInput = (props) => {
  const [isLoader, setLoader] = useState(false);
  const [urlResult, setUrlResult] = useState({
    thumb: [],
    urls: [],
    title: [],
  });

  const userInputHandler = async (url) => {
    setLoader(true);
    const urls = "http://localhost:3030/api/v1/yt";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        urls: url,
      }),
    };
    try {
      const response = await fetch(urls, options);
      const result = await response.json();
      setLoader(false);
      setUrlResult(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style["input-div"]}>
      <InputSection userUrls={userInputHandler} />
      {isLoader && <Loader />}
      {urlResult.urls.length > 0 && <ResultSection result={urlResult} />}
    </div>
  );
};

export default UserInput;
