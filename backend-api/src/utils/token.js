const jwt = require("jsonwebtoken");
const { SECRET_ACCESS_TOKEN } = require("../config/index");

const date = new Date();

const encodeToken = (userId) => {
  const info = {
    id: userId,
    created: date.toString(),
  };

  const emailToken = jwt.sign(info, SECRET_ACCESS_TOKEN, {
    expiresIn: "10m",
  });

  return emailToken;
};

const decodeToken = (token) => {
  const decoded = jwt.verify(token, SECRET_ACCESS_TOKEN);

  const userId = decoded.id;

  return userId;
};

module.exports = { encodeToken, decodeToken };
