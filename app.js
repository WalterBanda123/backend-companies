const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const cors = require("cors");
const companyRoutes = require("./form/routes/companies");
const userRoutes = require("./form/routes/users");

mongoose.connect("mongodb://127.0.0.1:27017/SalesDrive");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions)); // Use this after the variable declaration
// app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

mongoose.Promise = global.Promise;

app.use("/companies", companyRoutes);
app.use("/users", userRoutes);

app.use((req, res) => {
  const error = new Error();

  res.status(500).json({
    error: error,
  });
});

module.exports = app;
