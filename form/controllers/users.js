const User = require("./../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//-REGISTERING A NEW USER----
exports.users_signup = async (req, res) => {
  const isUserInExistance = await User.find({ email: req.body.email });

  if (isUserInExistance.length >= 1) {
     res.status(409).json({
      message: `User with this email already exist,  please use another email to sign up`,
    });
  } else {
    try {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
         return res.status(404).json({
            errorMessage: `Auth failed`,
            error: err,
          });
        } else {
          const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            fullName: req.body.fullName,
            email: req.body.email,
            password: hash,
          });

          newUser.save();
          res.status(200).json({
            message: "Successfully registered",
            user: newUser,
          });
        }
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to registered",
        error,
      });
    }
  }
};

//---LOGGING A USER---
exports.users_sign_in = async (req, res) => {
  const user = await User.find({ email: req.body.email });
  if (user.length < 1) {
    return res.status(401).json({
      error: "Auth failed",
    });
  }
  bcrypt.compare(req.body.password, user[0].password, async (err, result) => {
    if (err) {
      return res.status(401).json({
        error: err,
        errorMessage: "Auth failed",
      });
    }

    if (result) {
      const token = jwt.sign(
        {
          email: user[0].email,
          userId: user[0]._id,
        },
        process.env.ENV_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      return res.status(200).json({
        message: "Auth was successful",
        _id: user[0]._id,
        token: token,
      });
    }
    res.status(401).json({
      errorMessage: "Auth failed",
    });
  });
};

exports.user_logout = async (req, res) => {
  try {
  } catch (error) {}
};
//----GETTING USER BY ID -----
exports.users_get_by_id = async (req, res) => {
  try {
    const userId = req.params.userID;
    const user = await User.findById(userId);

    res.status(201).json({
      message: "Obtained the user",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

//---GETTING ALL USERS ----
exports.users_get_all = async (req, res) => {
  try {
    // User.insertMany(users);
    const userList = await User.find();
    res.status(201).json({
      allUsers: userList,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      text: "failed to retrieve users",
    });
  }
};
