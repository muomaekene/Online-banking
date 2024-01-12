const mongoose = require("mongoose");
const { URI } = require("./config");

mongoose.connect(URI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected successfully");
});
