const express = require("express");
const router = express.Router();
const UsersController = require('../controllers/users')


router.post("/signup", UsersController.users_signup );
router.post("/login", UsersController.users_sign_in);
router.get("/:userID", UsersController.users_get_by_id);
router.get("/",UsersController.users_get_all);

module.exports = router;
