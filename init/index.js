const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

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
  initData.data =initData.data.map((obj) => ({ ...obj, owner: "68da1db0ec6a7ad248feff33" }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized.");
};

initDB();
