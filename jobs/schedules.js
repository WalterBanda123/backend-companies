const Notification = require("./../form/models/notification");
const schedule = require("node-schedule");
const mongoose = require("mongoose");
const Company = require("./../form/models/company");

const JOB = schedule.scheduleJob(
  // "0 0 * * *"
  "*/1 * * * * ",
  async () => {
    console.log("Started Job");
    try {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);

      const meetings = await Company.find({
        meetingDate: {
          // $gte: tomorrow.setUTCHours(0, 0, 0, 0),
          $lt: tomorrow.setUTCHours(23, 0, 0, 0),
        },
      });

      for (const meeting of meetings) {
        try {
          const notification = await Notification({
            _id: new mongoose.Types.ObjectId(),
            meetingTime: meeting.meetingTime,
            message: `Reminder! There is a meeting scheduled for ${meeting.meetingDate}  at ${meeting.meetingTime} `,
          });

          notification.save();
        } catch (error) {
          console.log(error.message);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

module.exports = JOB;
