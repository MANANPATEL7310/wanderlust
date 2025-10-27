const User = require("../models/user.js");


// $ signupForm controller
module.exports.signupForm=(req, res) => {
  res.render("users/signup.ejs");
};


// $ signupPost controller
module.exports.signupPost=async (req, res) => {
    try {
      let { email, username, password } = req.body;
      let newUser = new User({ email, username });
      let registerUser = await User.register(newUser, password);

      req.login(registerUser, (err) => {
        if (err) return next(err);
        req.flash("success", "Welcome to WanderLust!");

        res.redirect(res.locals.redirectUrl || "/listings");
      });
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  };


// $ loginForm controller
module.exports.loginForm=(req, res) => {
  res.render("users/login.ejs");
};


// $ loginPost controller
module.exports.loginPost=async (req, res) => {
    req.flash("success", "Welcome Back to wanderlust!");
    res.redirect(res.locals.redirectUrl || "/listings");
  };


// $ logout controller
module.exports.logout=(req,res,next)=>{
   req.logOut((err)=>{
    if(err){
     return  next(err);
    }
    req.flash("success","Logged you out!");
    res.redirect("/listings");
   })
};