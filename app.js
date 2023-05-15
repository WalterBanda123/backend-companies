const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const cors = require("cors");
const companyRoutes = require("./form/routes/companies");
const userRoutes = require("./form/routes/users");

mongoose.connect("mongodb://127.0.0.1:27017/SalesDrive");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

mongoose.Promise = global.Promise;

// // cors
// app.use(cors());
// app.use(cors({
//     origin: '*'
// }));
// app.options('*', cors());

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "http://localhost:4200"
    // "*"
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

app.use((req, res) => {
  const error = new Error();
  res.status(500).json({
    error: error,
  });
});

module.exports = app;
