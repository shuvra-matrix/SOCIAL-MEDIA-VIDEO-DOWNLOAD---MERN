import style from "./ResultSection.module.css";
import BG from "../../assets/bg.jpg";

const ResultSection = (props) => {
  return (
    <div className={style["result-div"]}>
      <div className={style["thumb-div"]}>
        <img src={BG} alt="thumb"></img>
      </div>
      <h3> this jdkajdai adkadasas </h3>
      <div className={style["download-section"]}>
        <table>
          <tr>
            <th>Quality</th>
            <th>Size</th>
            <th>Download</th>
          </tr>
          <tr>
            <td>1080p</td>
            <td>20MB</td>
            <td>
              <a href="dadas" target="_blank">
                Download
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ResultSection;
