const express = require("express");
const cros = require("cors");
const requestIp = require("request-ip");
require("dotenv").config();
const mongoos = require("mongoose");
const MONGO_CONNECT = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}mymongoinit.6md0cxy.mongodb.net/smvd?retryWrites=true&w=majority`;
const PORT_NO = "3040";

const app = express();

app.use(express.json());
app.use(cros());
app.use(requestIp.mw());

const User = require("./models/user");

const publicRoutes = require("./routes/public");

app.use((req, res, next) => {
  User.findOne({ ip: req.clientIp })
    .then((user) => {
      if (!user) {
        const newUser = new User({
          ip: req.clientIp,
          activity: [],
        });
        return newUser.save().then((result) => {
          User.findOne({ ip: req.clientIp }).then((user) => {
            req.users = user;
            next();
          });
        });
      } else {
        req.users = user;
        next();
      }
    })
    .catch((err) => {
      console.log(err);
      next(new Error(err));
    });
});

app.use(publicRoutes);

mongoos
  .connect(MONGO_CONNECT)
  .then((result) => {
    app.listen(process.env.PORT || PORT_NO, () => {
      console.log(`Server Rnning On ${PORT_NO}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
