import style from "./UserInput.module.css";
import InputSection from "./InputSection";
import ResultSection from "../ResultSection/ResultSection";
import Loader from "../UI/Loader";
import { useState } from "react";
import Error from "../UI/Error";

const UserInput = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoader, setLoader] = useState(false);
  const [isServerOk, setServerOk] = useState(true);

  const [urlResult, setUrlResult] = useState({
    thumb: [],
    urls: [],
    title: [],
  });

  const userInputHandler = async (url, type) => {
    setLoader(true);
    let urls;
    if (type === "yt") {
      urls = "http://localhost:3030/api/v1/yt";
    }

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
      console.log(result);
      console.log(type);
      setLoader(false);
      if (result.status === "fail") {
        setServerOk(false);
        setErrorMessage(
          "An unexpected error occurred. Please try again later."
        );
      } else {
        setServerOk(true);
        setUrlResult(result);
      }
    } catch (err) {
      console.log(err);
      setLoader(false);
      setServerOk(false);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className={style["input-div"]}>
      <InputSection userUrls={userInputHandler} />
      {isLoader && <Loader />}
      {urlResult.urls.length > 0 && isServerOk && (
        <ResultSection result={urlResult} />
      )}
      {!isServerOk && <Error error={errorMessage} />}
    </div>
  );
};

export default UserInput;
