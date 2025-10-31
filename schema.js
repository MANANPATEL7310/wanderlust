 const Joi=require("joi");


// 🟢 Base schema (common rules for both new + update)
const baseListingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image:Joi.object({
      url: Joi.string().required(),
      filename: Joi.string().required()
    }).required(), // will override this in update
    categories: Joi.alternatives().try(  // ✅ NOW INSIDE listing object
      Joi.array().items(Joi.string()),
      Joi.string()
    ).required().messages({
      "any.required": "Please select at least one category."
    })
  }).required(),
});

const updateListingSchema  = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image:Joi.object({
      url: Joi.string().required(),
      filename: Joi.string().required()
    }).optional(), // will override this in update
    categories: Joi.alternatives().try(  // ✅ NOW INSIDE listing object
      Joi.array().items(Joi.string()),
      Joi.string()
    ).required()
  }).required()
}).unknown(true) ;


const reviewSchema=Joi.object({
    review: Joi.object({
      comment: Joi.string().required().min(3).max(500),
      rating: Joi.number().required().min(1).max(5)
    }).required()
})


module.exports = {baseListingSchema,updateListingSchema ,reviewSchema};




// 🟢 For new listing (allow empty or null image)
// For new listing
// const newListingSchema = baseListingSchema.fork(
//   ["listing.image"],
//   (field) =>
//     field
//       .allow("", null)       // allow empty or null
//       .optional()            // also allow missing field
//       .custom((value, helpers) => {
//         // Normalize whitespace-only input to empty string
//         if (typeof value === "string" && value.trim() === "") {
//           return "";
//         }
//         return value;
//       })
// );


// // 🟢 For update listing (stricter: must be a valid URI string)
// const updateListingSchema = baseListingSchema.fork(
//   ["listing.image"],
//   (field) => field.uri().required()
// );
