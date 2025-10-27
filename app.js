if(process.env.Node_ENV!="production"){
  require('dotenv').config({path:'./.env'});
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {
  newListingSchema,
  updateListingSchema,
  reviewSchema,
} = require("./schema.js");
const Review = require("./models/review.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

const MONGO_URL = process.env.MONGODB_URL;
async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => console.log(err));

const sessionOption = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: MONGO_URL,
    collectionName: "sessions",
  }),
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // this means 7 days
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
};

app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new LocalStrategy({ usernameField: "email" }, User.authenticate())
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
  res.redirect("/listings");
});

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

// app.get("/demoUser",async (req,res)=>{
//   let fakeUser=new User({
//     email:"student@gmail.com",
//     username:"delta-Student"
//   })

//    let registeredUser = await User.register(fakeUser,"helloworld");
//    console.log(registeredUser);
//    res.send(registeredUser);
// })

//listings
app.use("/listings", listingRouter);

//reviews
app.use("/listings/:id/reviews", reviewRouter);

//users
app.use("/", userRouter);

app.all(/.*/, (req, res, next) => {
  next(new ExpressError(404, "Page Not found!"));
});

//$ or we also use the app.use() => middleware function for any other path.
// app.use((req,res,next)=>{
//   next(new ExpressError(404,"Page Not Found!"));
// })

// Error handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "something went wrong!" } = err;
  res.status(status).render("error.ejs", { message });
  // res.status(status).send(message);
});

app.listen(process.env.PORT, () => {
  console.log("App is listening Now!");
});
