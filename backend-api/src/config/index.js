require("dotenv").config();

const {
  BASE_URL,
  PORT,
  SECRET_ACCESS_TOKEN,
  SENDER_ADDRESS,
  SENDER_PASSWORD,
  URI,
} = process.env;

module.exports = {
  BASE_URL,
  PORT,
  SECRET_ACCESS_TOKEN,
  SENDER_ADDRESS,
  SENDER_PASSWORD,
  URI,
};
