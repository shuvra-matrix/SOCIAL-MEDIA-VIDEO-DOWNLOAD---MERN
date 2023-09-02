const axios = require("axios");
require("dotenv").config();

function getFileSizeFromURL(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url, { responseType: "stream" });

      let fileSize = 0;

      response.data.on("data", (chunk) => {
        fileSize += chunk.length;
      });

      response.data.on("end", () => {
        resolve(fileSize);
      });

      response.data.on("error", (error) => {
        reject(error);
      });
    } catch (error) {
      reject(error);
    }
  });
}

exports.startApi = (req, res, next) => {
  res.status(200).json({ message: "Welcome To Vidown Api" });
};

exports.postYoutube = (req, res, next) => {
  const ytUrl = req.body.urls;
  let videoId = ytUrl.replace("https://www.youtube.com/watch?v=", "");
  videoId = videoId.replace("https://www.youtube.com/shorts/", "");
  videoId = videoId.replace("https://youtu.be/", "");
  videoId = videoId.replace("https://youtube.com/shorts/", "");
  videoId = videoId.replace("https://www.youtube.com/live/", "");
  videoId = videoId.slice(0, 11);
  console.log(videoId);
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
    const err = new Error(error);
    err.httpStatusCode = 500;
    return next(err);
  }
};

exports.postTwitter = async (req, res, next) => {
  console.log("twitter");
  const twUrl = req.body.urls;

  const options = {
    method: "POST",
    url: "https://twitter65.p.rapidapi.com/api/twitter/links",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.TW_API_KEY,
      "X-RapidAPI-Host": "twitter65.p.rapidapi.com",
    },
    data: {
      url: twUrl,
    },
  };

  try {
    axios.request(options).then((response) => {
      const data = response.data;
      let dataList = [];

      let dataUrl = data[0].urls;

      for (let i = 0; i < dataUrl.length; i++) {
        getFileSizeFromURL(dataUrl[i].url)
          .then((size) => {
            dataList.push({
              url: dataUrl[i].url,
              quality: dataUrl[i].subName + "P",
              size: (size / (1024 * 1024)).toFixed(1),
            });
          })
          .then((result) => {
            console.log(dataList);
            if (dataList.length > 2) {
              res.status(200).json({
                thumb: data[0]["pictureUrl"],
                urls: dataList,
                title: data[0]["meta"]["title"],
              });
            }
          })
          .catch((err) => {
            res
              .status(500)
              .json({ status: "fail", error: "Invalid request", code: 500 });

            const error = new Error(err);
            error.httpStatusCode = 500;
            return next(error);
          });
      }
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "fail", error: "Invalid request", code: 500 });
    const err = new Error(error);
    err.httpStatusCode = 500;
    return next(err);
  }
};
