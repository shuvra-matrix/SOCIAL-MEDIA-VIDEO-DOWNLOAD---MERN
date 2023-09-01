const express = require("express");
const cros = require("cors");
const app = express();

app.use(express.json());
app.use(cros());
const publicRoutes = require("./routes/public");

app.use(publicRoutes);

app.listen("3030");
