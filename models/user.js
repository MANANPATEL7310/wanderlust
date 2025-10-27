const mongoose=require("mongoose");
const {Schema}=mongoose;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new Schema({
  email:{
    type:String,
    required:true,
  },
  username:{
    type:String,
    required:true,
    unique:true
  }
})

// You're free to define your User how you like. Passport-Local Mongoose will add a username, hash and salt field to store the username, the hashed password and the salt value.

// $ so we not need to make sepaerate field for password because the passport-local-mongoose will do this for us.

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
  errorMessages: {
    MissingUsernameError: "Please provide an email address.",
    IncorrectUsernameError: "No account found with that email.",
    IncorrectPasswordError: "Incorrect password. Please try again.",
    MissingPasswordError: "Password is required.",
    UserExistsError: "An account with this email already exists.",
  },
});
const User=mongoose.model("User",userSchema);  

module.exports=User;