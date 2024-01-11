const jwt = require("jsonwebtoken");
const date = new Date();

const encodeToken = (userId) => {
  const info = {
    id: userId,
    created: date.toString(),
  };

  const emailToken = jwt.sign(info, process.env.JWT_SECRET, {
    expiresIn: "12m",
  });

  return emailToken;
};

const decodeToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const userId = decoded.id;

  return userId;
};

module.exports = { encodeToken, decodeToken };
