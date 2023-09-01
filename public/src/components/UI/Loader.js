import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style["loder-div"]}>
      <span className={style["loader"]}></span>
    </div>
  );
};

export default Loader;
