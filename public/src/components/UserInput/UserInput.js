import style from "./UserInput.module.css";
import InputSection from "./InputSection";
import ResultSection from "../ResultSection/ResultSection";
import Loader from "../UI/Loader";

const UserInput = (props) => {
  return (
    <div className={style["input-div"]}>
      <InputSection />
      <Loader />
      <ResultSection />
    </div>
  );
};

export default UserInput;
