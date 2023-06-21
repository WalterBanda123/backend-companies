const Notification = require("./../models/notification");
const mongoose = require("mongoose");

module.exports.get_notification = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json({
      message: "Successfully fetched all notifications",
      notifications,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch notifications",
      error: error.message,
    });
  }
};


