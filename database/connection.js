const mongoose = require("mongoose");
require("dotenv").config();
const db_name = process.env.DB_NAME;
mongoose.connect(db_name, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

