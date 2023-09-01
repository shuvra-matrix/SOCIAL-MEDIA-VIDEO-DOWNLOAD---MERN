const axios = require("axios");
require("dotenv").config();

exports.startApi = (req, res, next) => {
  res.status(200).json({ message: "Welcome To Vidown Api" });
};

exports.postYoutube = async (req, res, next) => {
  const ytUrl = req.body.urls;
  console.log(ytUrl);
  const options = {
    method: "GET",
    url: "https://yt-api.p.rapidapi.com/dl",
    params: { id: ytUrl },
    headers: {
      "X-RapidAPI-Key": process.env.YT_API_KEY,
      "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
    },
  };

  try {
    axios.request(options).then((response) => {
      const result = response.data;
      res.status(200).json({
        thumb: result["thumbnail"],
        urls: result["formats"],
        title: result["title"],
      });
    });
  } catch (error) {
    console.error(error);
  }
};
