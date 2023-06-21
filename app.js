const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const schedular = require("./jobs/schedules");

const mongoose = require("mongoose");
const cors = require("cors");
const companyRoutes = require("./form/routes/companies");
const userRoutes = require("./form/routes/users");
const campaignRoutes = require("./form/routes/campaigns");
const meetingsRoutes = require("./form/routes/meetingsRoutes");
const notificationRoutes = require("./form/routes/notificationRoutes");

mongoose
  .connect("mongodb://127.0.0.1:27017/SalesDrive")
  .then(() => {
    // schedular.schedule();
    // console.log(schedular.schedule());
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("combined"));
app.set("json escape", true);

mongoose.Promise = global.Promise;

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    // "http://localhost:4200"
    "*"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", true);
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use("/users", userRoutes);
app.use("/companies", companyRoutes);
app.use("/campaign", campaignRoutes);
app.use("/meetings", meetingsRoutes);
app.use("/notifications", notificationRoutes);

app.use((req, res) => {
  const error = new Error();
  res.status(500).json({
    error: error,
  });
});

module.exports = app;
