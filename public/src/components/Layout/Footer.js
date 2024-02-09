import styles from "./Footer.module.css";
import gitLogo from "../../assets/icons8-github-logo-48.png";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <a href="https://github.com/shuvra-matrix">
        <img src={gitLogo} alt="github"></img>
        <span>Shuvra Chakrabarty</span>
      </a>
    </footer>
  );
};

export default Footer;
