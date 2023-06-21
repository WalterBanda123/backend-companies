const mongoose = require("mongoose");

const MeetingSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  _companyId: { type: mongoose.Types.ObjectId, ref: "Company", required: true },
  meetingDate: { type: Date, default: "" },
  meetingTime: { type: String, default: "" },
});

module.exports = mongoose.model("Meeting", MeetingSchema);
