import style from "./InputSection.module.css";
import { useState } from "react";

const InputSection = (props) => {
  const [userInput, setUserInput] = useState("");

  const userInputHnadler = (e) => {
    setUserInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userInput);
    setUserInput("");
  };

  return (
    <form method="POST" onSubmit={submitHandler}>
      <input
        className={style["input"]}
        type="text"
        name="search"
        placeholder="Past Link Here"
        onChange={userInputHnadler}
        value={userInput}
      ></input>
      <button className={style["btn"]} type="submit">
        Search
      </button>
    </form>
  );
};

export default InputSection;
