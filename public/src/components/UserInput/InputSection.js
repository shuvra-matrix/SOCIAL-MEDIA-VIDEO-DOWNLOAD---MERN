import style from "./InputSection.module.css";
import { useState } from "react";

const InputSection = (props) => {
  const [userInput, setUserInput] = useState("");
  const [isInputValid, setInputValid] = useState(true);

  const userInputHnadler = (e) => {
    setInputValid(true);
    setUserInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const pattern = /^(https:\/\/|http:\/\/)/;
    if (pattern.test(userInput)) {
      setInputValid(true);
      console.log("hi sadsd");
      let type;

      if (userInput.includes("youtu")) {
        type = "yt";
      }
      if (userInput.includes("twitter.com")) {
        type = "tw";
      }

      props.userUrls(userInput, type);
      setUserInput("");
    } else {
      props.userUrls("Please enter a valid URL.", "error");
      setInputValid(false);
    }
  };

  return (
    <form method="POST" onSubmit={submitHandler}>
      <input
        className={
          isInputValid
            ? style["input"]
            : style["input"] + " " + style["invalid"]
        }
        type="text"
        name="search"
        placeholder="Past Link Here"
        onChange={userInputHnadler}
        value={userInput || ""}
        required
        aria-required
      ></input>
      <button className={style["btn"]} type="submit">
        Search
      </button>
    </form>
  );
};

export default InputSection;
