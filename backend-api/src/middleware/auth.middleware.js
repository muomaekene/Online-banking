const jwt = require("jsonwebtoken");

const { SECRET_ACCESS_TOKEN } = require("../config/index");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, SECRET_ACCESS_TOKEN);

    req.userData = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Authentication Failed!" });
  }
};
