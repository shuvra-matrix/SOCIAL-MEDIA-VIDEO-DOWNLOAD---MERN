import style from "./ResultSection.module.css";

const ResultSection = (props) => {
  const title = props.result.title;
  const thumb = props.result.thumb[2].url;
  console.log(thumb);
  return (
    <div className={style["result-div"]}>
      <div className={style["thumb-div"]}>
        <img src={thumb} alt="thumb"></img>
      </div>
      <h3> {title} </h3>
      <div className={style["download-section"]}>
        <table>
          <thead>
            <tr>
              <th>Quality</th>
              <th>Size</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {props.result.urls.map((url) => (
              <tr key={url.itag}>
                <td>{url.qualityLabel}</td>
                <td>
                  {(
                    (url.bitrate * (+url.approxDurationMs / 1000)) /
                    (8 * 1024 * 1024)
                  ).toFixed(1)}
                  MB
                </td>
                <td>
                  <a href={url.url} target="_blank" rel="noreferrer">
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultSection;
