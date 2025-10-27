const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner } = require("../middleware.js");
const { validateNewListing , validateUpdateListing } = require("../middleware.js");
const multer  = require('multer')
//multer is the middleware for handling multipart/form-data, which is primarily used for uploading files. and it is parses the incoming file data and makes it accessible via req.file or req.files in your route handlers.
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage })
// dest is the destination folder where the uploaded files will be stored temporarily.

const listingController = require("../controllers/listings.js");

// Here we use express router.route() to chain different methods for the same path.
router
  .route("/")
  // ! Index route
  .get(wrapAsync(listingController.index))
  // ! Create Route
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateNewListing,
    // here 'listing[image]' is the name of the file input field in the form. This tells multer to look for a single file upload with that specific field name.
    wrapAsync(listingController.createListing)
  )

  //  .post(upload.single('listing[image]'),(req,res)=>{
  //   res.send(req.file);
  // })

// $ New Route
router.get("/new", isLoggedIn, listingController.newListingForm);

router
  .route("/:id")
  // ! Show Route
  .get(wrapAsync(listingController.showListing))
  // ! Update Route
  .put(
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateUpdateListing,
    wrapAsync(listingController.updateListing)
  )
  // ! Delete Route
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));


// $ Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editListingForm)
);

module.exports = router;






// ! Before Refactoring code .....

// $ Index Route
// router.get("/", wrapAsync(listingController.index));


// $ Create Route
// router.post(
//   "/",
//   isLoggedIn,
//   validateListing,
//   wrapAsync(listingController.createListing)
// );


// $ Show Route
// router.get("/:id", wrapAsync(listingController.showListing));


// $ Update Route
// router.put(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   validateListing,
//   wrapAsync(listingController.updateListing)
// );


// $ Delete Route
// router.delete(
//   "/:id",
//   isLoggedIn,
//   isOwner,
//   wrapAsync(listingController.deleteListing)
// );