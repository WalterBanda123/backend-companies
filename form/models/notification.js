const mongoose = require("mongoose");

const NotificationSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  meetingTime:{type:String, default:''},
  message: { type: String, default: "" },
});

module.exports = mongoose.model("Notification", NotificationSchema);
