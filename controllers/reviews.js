const Listing = require("../models/listing.js");
const Review = require("../models/review.js");


// $ postReview controller
module.exports.postReview=async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    // 🟢 Here you set which user created it
    newReview.author = req.user._id;

    await newReview.save();
    listing.reviews.push(newReview);
    await listing.save();

    req.flash("success", "Successfully New Review Created!");
    res.redirect(`/listings/${listing._id}`);
  }


 // $ deleteReview controller
  module.exports.deleteReview=async (req, res) => {
    let { id, reviewId } = req.params;
    // let listing=await Listing.findById(id);
    // listing.reviews.pull(reviewId);
    // await listing.save();

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");

    res.redirect(`/listings/${id}`);
  }