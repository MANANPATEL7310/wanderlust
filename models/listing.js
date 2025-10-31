const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  // we will use GeoJSON format to store the location data
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  categories: {
    type: [String],
    enum: [
      "Rooms",
      "Beach",
      "Cabins",
      "City",
      "Farms",
      "Lakefront",
      "Hotels",
      "Mountain",
      "Pools",
      "Boats",
      "Camping",
      "Arctic",
      "Unique",
    ],
    default: [],
  },
    averageRating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0, // 0 means no reviews yet
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing.reviews.length) {
    let res = await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

listingSchema.methods.updateAverageRating = async function () {
  const Review = require("./review");

  // Find all reviews linked to this listing
  const reviews = await Review.find({ listing: this._id });

  if (reviews.length === 0) {
    this.averageRating = 0;
  } else {
    const avg =
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    this.averageRating = Math.round(avg * 10) / 10; // Round to 1 decimal place
  }

  await this.save();
};





const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
