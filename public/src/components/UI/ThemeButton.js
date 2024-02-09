import { useTheme } from "../../store/ThemeContext";
import styles from "./ThemeButton.module.css";
import sunIcon from "../../assets/icons8-sun-48.png";
import moonIcon from "../../assets/icons8-moon-48.png";

const ThemeButton = () => {
  const { theme, themeControler } = useTheme();

  const themeHandler = () => {
    themeControler();
  };

  const btnThemeClass = theme === "dark" ? "theme-btn-dark" : "theme-btn-light";

  const btnRoundClass =
    theme === "dark" ? "theme-btn-round-dark" : "theme-btn-round-light";

  const buttonIcon = theme === "dark" ? moonIcon : sunIcon;

  return (
    <div
      onClick={themeHandler}
      className={`${styles["theme-btn"]} ${styles[btnThemeClass]}`}
    >
      <div className={`${styles["theme-btn-round"]} ${styles[btnRoundClass]}`}>
        <img src={buttonIcon} alt="icon"></img>
      </div>
    </div>
  );
};

export default ThemeButton;
