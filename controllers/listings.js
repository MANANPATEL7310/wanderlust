const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError.js");
const { cloudinary } = require("../cloudConfig.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAPBOX_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

//$ index controller
module.exports.index = async (req, res) => {
  const { category, priceRange, rating, search } = req.query;
  let filter = {};

  // Search filter (case-insensitive search in title)
  if (search) {
    filter.title = { $regex: search, $options: "i" };
  }

  // Category filter (from category buttons or modal)
  if (category) {
    const categories = category.split(",");
    filter.categories = { $in: categories };
  }

  // Price range filter
  if (priceRange) {
    switch (priceRange) {
      case "0-1000":
        filter.price = { $gte: 0, $lte: 1000 };
        break;
      case "1000-5000":
        filter.price = { $gte: 1000, $lte: 5000 };
        break;
      case "5000-10000":
        filter.price = { $gte: 5000, $lte: 10000 };
        break;
      case "10000+":
        filter.price = { $gte: 10000 };
        break;
      default:
        break;
    }
  }

  // Rating filter
  if (rating) {
    if (rating === "no-rating") {
      // Filter for listings with no reviews (averageRating = 0)
      filter.averageRating = 0;
    } else if (!isNaN(rating)) {
      // Filter for listings with rating >= selected value
      filter.averageRating = { $gte: parseFloat(rating) };
    }
  }

  const allListings = await Listing.find(filter);
  res.render("listings/index.ejs", { allListings, query: req.query });
};

// $ newListingForm controller
module.exports.newListingForm = (req, res) => {
  res.render("listings/new.ejs");
};

//$ createListing controller
module.exports.createListing = async (req, res) => {
  //  let {title,description,image,price,location,country}=req.body;
  //  let listing=new Listing({title,description,image,price,location,country});
  // OR
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send()
    
    //console.log(response.body.features[0].geometry);

  let url = req.file.path;
  let filename = req.file.filename;

  let newListing = new Listing(req.body.listing);
  //  if (!newListing.description){
  //   throw new ExpressError(400,"Description is missing.");
  //  }
  // $ here we can see that this is the method by which we apply the validation for the each field, But this is the very complex and very basic method so we can use the "joi" for apply the validation at the server side. which prevent to store the wrong data or empty data which is send by using the postman or hoppscotch like tools.

  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  newListing.geometry = response.body.features[0].geometry;
  newListing.categories = Array.isArray(req.body.listing.categories) 
    ? req.body.listing.categories 
    : req.body.listing.categories 
      ? [req.body.listing.categories]
      : [];
  await newListing.save();
  req.flash("success", "Successfully New Listing Created!");
  res.redirect("/listings");
};

// $ showListing controller
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id)
    .populate("owner")
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    });

  if (!listing) {
    req.flash("error", "Listing you are requested for does not exist!");
    res.redirect("/listings");
  } else {
    res.render("listings/show.ejs", { listing });
  }
};

// $ editListingForm controller
module.exports.editListingForm = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you are requested for does not exist!");
    res.redirect("/listings");
  } else {
    res.render("listings/edit.ejs", { listing });
  }
};

// $ updateListing controller
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  //  Keep old image info before modifying anything
  const oldImage = listing.image ? listing.image.filename : null;

  //  Update other fields (title, price, etc.)
  listing.set(req.body.listing);

  //  Handle categories - convert to array if needed
  if (req.body.listing.categories) {
    listing.categories = Array.isArray(req.body.listing.categories) 
      ? req.body.listing.categories 
      : req.body.listing.categories 
        ? [req.body.listing.categories]
        : [];
  }

  //  Handle image upload
  if (req.file) {
    //  Destroy old image only if it exists
    if (oldImage) {
      const result = await cloudinary.uploader.destroy(oldImage);
      // console.log("Cloudinary destroy result:", result);
    }

    //  Add new image data
    listing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };

    // console.log("New image added:", listing.image);
  }

  //  Save updated listing
  await listing.save();

  req.flash("success", "Successfully updated listing!");
  res.redirect(`/listings/${id}`);
};

// $ deleteListing controller
module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (listing && listing.image && listing.image.filename) {
    await cloudinary.uploader.destroy(listing.image.filename);
  }
  await Listing.findByIdAndDelete(id);

  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
