const mongoose = require("mongoose");
const { Schema } = mongoose;




const reviewSchema = new Schema({
  comment: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  listing: {
  type: Schema.Types.ObjectId,
  ref: "Listing",
  required: true
}
});


reviewSchema.post("save", async function (doc) {
  const Listing = require("./listing"); // 👈 require inside
  const listing = await Listing.findById(doc.listing);
  if (listing) await listing.updateAverageRating();
});

reviewSchema.post("findOneAndDelete", async function (doc) {
  if (doc && doc.listing) {
    const Listing = require("./listing"); // 👈 same here
    const listing = await Listing.findById(doc.listing);
    if (listing) await listing.updateAverageRating();
  }
});



const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
