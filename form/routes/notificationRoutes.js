const notificationController = require("./../controllers/notificationsController");
const express = require("express");
const router = express.Router();

router.get("/", notificationController.get_notification);

module.exports = router;
