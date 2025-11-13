const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapasync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/users.js");



router.route("/signup")
  .get(userController.signupGET)
  .post(wrapAsync(userController.signupPost));


router.route("/login")
  .get(userController.loginGET)
  .post(saveRedirectUrl,
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    userController.loginPOST);



router.get("/logout", userController.logout);

module.exports = router;