import styles from "./Error.module.css";

const Error = (props) => {
  return (
    <div className={styles["error"]}>
      <h3>{props.error}</h3>
    </div>
  );
};

export default Error;
