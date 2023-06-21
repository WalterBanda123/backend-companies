const Meeting = require("./../models/meeting");
const mongoose = require("mongoose");

module.exports.create_meeting = async (req, res, next) => {
  try {
    const meeting = await Meeting({
      _id: new mongoose.Types.ObjectId(),
      _companyId: req.body._companyId,
      meetingDate: req.body.meetingDate,
      meetingTime: req.body.meetingTime,
    });
    await meeting.save();
    res.status(200).json({
      message: "Successfully created a new meeting",
      meeting,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create a new meeting",
      meeting,
    });
  }
};


//---GETTING ALL THE MEETINGS
module.exports.get_meetings = async (req, res, next) => {
  try {
    const meetings = await Meeting.find();
    res.status(200).json({
      message: "Sucsessfully fetched all the meetings",
      meetings,
    });
  } catch (error) {
    res.status(500).json({
      message: "failed to  fetch meetings",
      meeting,
    });
  }
};
