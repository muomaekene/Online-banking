const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  initial: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  maidenName: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  phone1: {
    type: Number,
    required: true,
    unique: true,
  },
  phone2: {
    type: Number,
    required: true,
    unique: true,
  },
  ssn: {
    type: Number,
    required: true,
    unique: true,
  },
  ein: {
    type: Number,
    required: true,
    unique: true,
  },
  employmentStatus: {
    type: String,
    required: true,
  },
  sourceOfIncome: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
