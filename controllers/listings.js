const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError.js");
const {cloudinary} = require("../cloudConfig.js");

//$ index controller
module.exports.index=async (req, res) => {
    let allListings = await Listing.find();
    res.render("listings/index.ejs", { allListings });
  };


// $ newListingForm controller
module.exports.newListingForm=(req, res) => {
  res.render("listings/new.ejs");
};


//$ createListing controller
module.exports.createListing=async (req, res) => {
    //  let {title,description,image,price,location,country}=req.body;
    //  let listing=new Listing({title,description,image,price,location,country});
    // OR
    let url=req.file.path;
    let filename=req.file.filename;

    let newListing = new Listing(req.body.listing);
    //  if (!newListing.description){
    //   throw new ExpressError(400,"Description is missing.");
    //  }
    // $ here we can see that this is the method by which we apply the validation for the each field, But this is the very complex and very basic method so we can use the "joi" for apply the validation at the server side. which prevent to store the wrong data or empty data which is send by using the postman or hoppscotch like tools.
    
    newListing.owner = req.user._id;
    newListing.image={url,filename};
    await newListing.save();
    req.flash("success", "Successfully New Listing Created!");
    res.redirect("/listings");
  };


// $ showListing controller
module.exports.showListing=async (req, res) => {
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
module.exports.editListingForm=async (req, res) => {
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

  //  Handle image upload
  if (req.file) {
    //  Destroy old image only if it exists
    if (oldImage) {
      const result = await cloudinary.uploader.destroy(oldImage);
      console.log("Cloudinary destroy result:", result);
    }

    //  Add new image data
    listing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };

    console.log("New image added:", listing.image);
  }

  //  Save updated listing
  await listing.save();

  req.flash("success", "Successfully updated listing!");
  res.redirect(`/listings/${id}`);
};


// $ deleteListing controller
module.exports.deleteListing=async (req, res) => {
    let { id } = req.params;
      const listing = await Listing.findById(id);
  if (listing && listing.image && listing.image.filename) {
    await cloudinary.uploader.destroy(listing.image.filename);
  }
    await Listing.findByIdAndDelete(id);

    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  };