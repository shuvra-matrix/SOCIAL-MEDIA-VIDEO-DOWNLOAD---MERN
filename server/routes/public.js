const express = require("express");

const routes = express.Router();

const publicController = require("../controller/public");

routes.get("/", publicController.startApi);

routes.post("/api/v1/yt", publicController.postYoutube);

routes.post("/api/v1/tw", publicController.postTwitter);

module.exports = routes;
