import style from "./InputSection.module.css";

const InputSection = (props) => {
  return (
    <form method="POST">
      <input
        className={style["input"]}
        type="text"
        name="search"
        placeholder="Past Link Here"
      ></input>
      <button className={style["btn"]} type="submit">
        Search
      </button>
    </form>
  );
};

export default InputSection;
