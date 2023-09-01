const axios = require("axios");
require("dotenv").config();

async function getVideoSize(url) {
  try {
    const response = await axios.get(url, { responseType: "stream" });

    if (response.status === 200) {
      let sizeInBytes = 0;

      response.data.on("data", (chunk) => {
        sizeInBytes += chunk.length;
      });

      response.data.on("end", () => {
        const sizeInKb = sizeInBytes / 1024; // Convert to kilobytes
        const sizeInMb = sizeInKb / 1024; // Convert to megabytes
        console.log(sizeInMb);
        return sizeInMb;
      });
    } else {
      console.log(`HTTP request failed with status code: ${response.status}`);
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

exports.startApi = (req, res, next) => {
  res.status(200).json({ message: "Welcome To Vidown Api" });
};

exports.postYoutube = async (req, res, next) => {
  const ytUrl = req.body.urls;
  let videoId = ytUrl.replace("https://www.youtube.com/watch?v=", "");
  videoId = videoId.replace("https://www.youtube.com/shorts/", "");
  videoId = videoId.replace("https://youtu.be/", "");
  videoId = videoId.replace("https://youtube.com/shorts/", "");
  const options = {
    method: "GET",
    url: "https://yt-api.p.rapidapi.com/dl",
    params: { id: videoId },
    headers: {
      "X-RapidAPI-Key": process.env.YT_API_KEY,
      "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
    },
  };

  try {
    axios.request(options).then((response) => {
      const result = response.data;
      // console.log(result);
      if (result.thumbnail) {
        let dataList = result.formats.map((obj) => {
          return {
            url: obj.url,
            quality: obj.qualityLabel,
            size: (
              (obj.bitrate * (+obj.approxDurationMs / 1000)) /
              (8 * 1024 * 1024)
            ).toFixed(1),
          };
        });

        console.log(dataList);

        res.status(200).json({
          thumb: result["thumbnail"][2].url,
          urls: dataList,
          title: result["title"],
        });
      } else {
        res
          .status(403)
          .json({ status: "fail", error: "Invalid request", code: 403 });
      }
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "fail", error: "Invalid request", code: 500 });
  }
};
