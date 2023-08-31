import style from "./InputSection.module.css";

const InputSection = (props) => {
  return (
    <div className={style["input-div"]}>
      <form method="POST">
        <input
          className={style["input"]}
          type="text"
          name="search"
          placeholder="Past Link Here"
        ></input>
        <button className={style["btn"]} type="submit">
          Download
        </button>
      </form>
    </div>
  );
};

export default InputSection;
