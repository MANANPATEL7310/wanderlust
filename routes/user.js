const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");

router
  .route("/signup")
  // ! signup form route
  .get(userController.signupForm)
  // ! signup post route
  .post(saveRedirectUrl, wrapAsync(userController.signupPost));

router
  .route("/login")
  // ! login form route
  .get(userController.loginForm)
  // ! login post route
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    wrapAsync(userController.loginPost)
  );

//logout route
router.get("/logout", userController.logout);

module.exports = router;





// $ signup form route
// router.get("/signup", userController.signupForm);

// $ signup post route
// router.post("/signup", saveRedirectUrl, wrapAsync(userController.signupPost));

// $ login form route
// router.get("/login", userController.loginForm);

// $ login post route
// router.post(
//   "/login",
//   saveRedirectUrl,
//   passport.authenticate("local", {
//     failureRedirect: "/login",
//     failureFlash: true,
//   }),
//   wrapAsync(userController.loginPost)
// );
