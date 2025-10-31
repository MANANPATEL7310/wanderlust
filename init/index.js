const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

if(process.env.Node_ENV!="production"){
  require("dotenv").config({ path: "../.env" });
}

const MONGO_URL = process.env.MONGODB_URL; // here MONGO_URL is the variable name in .env file which contains the connection string of the mongo atlas.

const ownerId=process.env.SAMPLE_OWNER_ID;

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => console.log(err));

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data =initData.data.map((obj) => ({ ...obj, owner: ownerId }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized.");
};

initDB();


