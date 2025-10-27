const Listing = require("./models/listing");
const Review = require("./models/review.js");
const {baseListingSchema ,updateListingSchema } = require("./schema.js");
const { reviewSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError");



module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    //redirectURL is used to store the url which user requested before login
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be logged in first!");
    return res.redirect("/login");
  }
  next();
};



module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
    //we use res.locals because session will be destroyed after login and we want to access this url in the very next request
  }
  next();
};



module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner._id.equals(res.locals.currentUser._id)) {
    req.flash("error", "You do not have permission to do that!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};



module.exports.isReviewAuthor = async (req, res, next) => {
  let {id , reviewId } = req.params;
  let review = await Review.findById(reviewId);

  if (!review.author._id.equals(res.locals.currentUser._id)) {
    req.flash("error", "You do not have permission to do that!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};



module.exports.validateNewListing = (req, res, next) => {
  // Attach file info to req.body.listing.image
  if (!req.file) {
    throw new ExpressError(400, "At least one image is required.");
  }
  
  if (!req.body.listing) req.body.listing = {};
  req.body.listing.image = {
    url: req.file.path,
    filename: req.file.filename,
  };

  // Validate using base schema
  const { error } = baseListingSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errMsg = error.details.map((e) => e.message).join(", ");
    throw new ExpressError(400, errMsg);
  }

  next();
};


module.exports.validateUpdateListing = (req, res, next) => {
  if (!req.body.listing) req.body.listing = {};

  // Use existing image if no new file uploaded
  if (!req.file && req.body.existingImage) {
    req.body.listing.image = {
      url: req.body.existingImage.url,
      filename: req.body.existingImage.filename
    };
  }

  // If file uploaded → attach image details
  if (req.file) {
    req.body.listing.image = {
      url: req.file.path,
      filename: req.file.filename
    };
  }

  const { error } = updateListingSchema .validate(req.body, { abortEarly: false });
  if (error) {
    const msg = error.details.map(el => el.message).join(", ");
    throw new ExpressError(400,msg);
  } else {
    next();
  }
};




module.exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((e) => e.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};