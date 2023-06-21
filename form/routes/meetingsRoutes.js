const express = require("express");
const router = express.Router();
const meetingsController = require("./../controllers/meetingsController");

router.post("/create-meeting", meetingsController.create_meeting);
router.get("/", meetingsController.get_meetings);

module.exports = router;
