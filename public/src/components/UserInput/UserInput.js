import style from "./UserInput.module.css";
import InputSection from "./InputSection";
import ResultSection from "../ResultSection/ResultSection";
import Loader from "../UI/Loader";
import { useState } from "react";
import Error from "../UI/Error";
import IndexMessage from "../Layout/IndexMessage";

const UserInput = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoader, setLoader] = useState(false);
  const [isServerOk, setServerOk] = useState(true);
  const [isUserNew, setUserNeW] = useState(true);
  const [urlResult, setUrlResult] = useState({
    thumb: [],
    urls: [],
    title: [],
  });

  const userInputHandler = async (url, type) => {
    setUserNeW(false);
    setUrlResult({
      thumb: [],
      urls: [],
      title: [],
    });

    let urls;
    if (type === "yt") {
      urls = "http://localhost:3040/api/v1/yt";
    }
    if (type === "tw") {
      urls = "http://localhost:3040/api/v1/tw";
    }

    if (type === "fb") {
      urls = "http://localhost:3040/api/v1/fb";
    }

    if (type === "ig") {
      urls = "http://localhost:3040/api/v1/ig";
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

    if (type === "error") {
      setServerOk(false);
      setErrorMessage(url);
    } else {
      setLoader(true);
      setServerOk(true);
      try {
        const response = await fetch(urls, options);
        const result = await response.json();
        setLoader(false);
        if (result.status === "fail") {
          setServerOk(false);
          setErrorMessage(result.error);
        } else {
          setServerOk(true);
          setUrlResult(result);
        }
      } catch (err) {
        setLoader(false);
        setServerOk(false);
        setErrorMessage(
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  };

  return (
    <div className={style["input-div"]}>
      <InputSection userUrls={userInputHandler} />
      {isUserNew && <IndexMessage />}

      {isLoader && <Loader />}
      {urlResult.urls.length > 0 && isServerOk && (
        <ResultSection result={urlResult} />
      )}
      {!isServerOk && <Error error={errorMessage} />}
    </div>
  );
};

export default UserInput;
