import style from "./UserInput.module.css";
import InputSection from "./InputSection";
import ResultSection from "../ResultSection/ResultSection";

const UserInput = (props) => {
  return (
    <div className={style["input-div"]}>
      <InputSection />
      <ResultSection />
    </div>
  );
};

export default UserInput;
