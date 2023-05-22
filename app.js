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

// app.use(cors(corsOptions)); // Use this after the variable declaration
// app.use(cors());

const corsOptions = {
  origin: "*", // Replace with your frontend domain
  optionsSuccessStatus: 200, // Some legacy browsers (e.g., IE11) choke on 204
};
app.options("*", cors(corsOptions));
app.use(cors(corsOptions));

app.use("/companies", companyRoutes);
app.use("/users", userRoutes);

app.use((req, res) => {
  const error = new Error();

  res.status(500).json({
    error: error,
  });
});

module.exports = app;
