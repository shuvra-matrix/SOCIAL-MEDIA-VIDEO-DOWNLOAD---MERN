const axios = require("axios");
require("dotenv").config();

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
      console.log(result);
      if (result.thumbnail) {
        res.status(200).json({
          thumb: result["thumbnail"],
          urls: result["formats"],
          title: result["title"],
        });
      } else {
        res
          .status(403)
          .json({ status: "fail", error: "Invalid request", code: 403 });
      }
    });
  } catch (error) {
    console.error(error);
  }
};
